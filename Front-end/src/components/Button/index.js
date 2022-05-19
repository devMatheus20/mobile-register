import React from 'react'
import {Button as ContainerButton} from './styles'


function Button({ children, ...props }) {
    return <ContainerButton isBack={props.isBack} {...props}>{children}</ContainerButton>
}

export default Button