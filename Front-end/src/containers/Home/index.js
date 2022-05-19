import React, {useRef} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import * as S from './styles'
import People from '../../assets/peoples.svg'
import Arrow from '../../assets/arrow.svg'
import Title from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'



function Home() {
    const name = useRef()
    const age = useRef()

    const navigate = useNavigate()


    async function addNewUser() {
        await axios.post('http://localhost:3001/users', {
            name: name.current.value,
            age: age.current.value
        })

        navigate('/users')
    }

    return (
        <S.Container>

            <S.Image src={People} alt="People" />

            <ContainerItens>
                <Title>Olá!</Title>
                
                <S.InputLabel>Nome</S.InputLabel>
                <S.Input ref={name} placeholder='Matheus'></S.Input>

                <S.InputLabel>Idade</S.InputLabel>
                <S.Input ref={age} placeholder='20'></S.Input>

                <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="Arrow"/></Button>

            </ContainerItens>


        </S.Container>
    );
}




export default Home