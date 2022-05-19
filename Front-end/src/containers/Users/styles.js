import styled from 'styled-components'
import Background from '../../assets/background-1.svg'


export const Container = styled.div `
    background-image: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

`

export const Image = styled.img`
    margin-top: 15px;
`

export const Users = styled.div `
    min-height: 150px;

    li {
        background: rgba(255, 255, 255, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-around;  
        height: 58px;
        width: 100%;
        margin-top: 20px;
        border-radius: 14px;
        border: none;
        font-weight: 400;
        font-size: 22px;
        color: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`