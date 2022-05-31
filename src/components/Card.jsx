import React from 'react'
import styled from 'styled-components'

export default function Card() {
    return (
        <CardDiv>
            <CardText>Relatório Enviado, Deus abençoe!</CardText>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    background-color: #fff;
    min-width: 270px;
    max-width: 270px;
    min-height: 260px;
    max-height: 300px;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const CardText = styled.h3`
font-size: 1.3rem;
text-align: center;
`
