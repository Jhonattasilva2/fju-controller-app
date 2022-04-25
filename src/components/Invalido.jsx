import React from 'react'
import styled from 'styled-components'


export default function Invalido() {
  return (
    <Span>Login ou Senha inválidos</Span>
  )
}

const Span = styled.span`
    color: red;
    font-size: 0.7rem;
    padding: 0.5rem;
`
