import styled from 'styled-components'


export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    min-width: 400px;
    height: 100%;
    margin-top: 25px;
    padding: 0 30px;
    border-radius: 61px 61px 0px 0px;
    ${props => props.isBlur && 'backdrop-filter: blur(45px);'}
`
