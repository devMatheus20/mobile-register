import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import * as S from './styles'
import UsersSvg from '../../assets/users.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import Title from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'


function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchUsers() {
            const { data: newUsers } = await axios.get('http://localhost:3001/users')

            setUsers(newUsers)
        }

        fetchUsers()

    }, [])


    function goBack() {
        navigate('/')
    }

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)

        const newUsers = users.filter(user => user.id !== userId)

        setUsers([...newUsers])

    }

    return (
        <S.Container>

            <S.Image src={UsersSvg} alt="Users" />

            <ContainerItens isBlur={true}>
                <Title>Usuários</Title>

                <S.Users>
                    {users.map(user =>
                        <li key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Trash" /></button>
                        </li>
                    )
                    }
                </S.Users>

                <Button onClick={goBack} isBack={true}><img src={Arrow} alt="Arrow" />Voltar</Button>

            </ContainerItens>


        </S.Container>
    )
}

export default Users