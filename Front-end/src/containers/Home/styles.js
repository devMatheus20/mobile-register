import styled from 'styled-components'
import Background from '../../assets/background-2.svg'


export const Container = styled.div`
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

export const InputLabel = styled.label`
    display: block;
    margin-top: 40px;
    margin-left: 2%;
    font-weight: 700;
    font-size: 18px;
    color: #EEEEEE;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    height: 58px;
    width: 100%;
    padding-left: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    font-weight: 400;
    font-size: 22px;
    color: #FFF;
`

