import React from 'react'
import { ContainerItens } from './styles'


function Container({ children, ...props }) {
    return <ContainerItens isBlur={props.isBlur}>{children}</ContainerItens>
}

export default Container