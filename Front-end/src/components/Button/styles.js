import styled from 'styled-components'


export const Button = styled.button `
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    height: 74px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 60px auto;
    border: ${props => props.isBack ? '1px solid #FFF' : 'none'};
    border-radius: 14px;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }

    :active {
        opacity: 0.8;
    }

    img {
        transform: rotate(${props => props.isBack && '180deg'});
    }

`