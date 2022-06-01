import React from 'react'
import styled from 'styled-components'

export default function Relatorios() {
    return (
        <RelatoriosDiv>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
            <RelatorioCard>Texto</RelatorioCard>
        </RelatoriosDiv>
    )
}

const RelatoriosDiv = styled.div`
    min-width: 284px;
    min-height: 480px;
    max-height: 480px;
    background-color: #fff;
    border-radius: 0.62rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: scroll;
`

const RelatorioCard = styled.div`
background-color: red;
color: white;
min-height: 130px;
margin: 0.5rem;
border-radius: 0.62rem;
display: flex;
justify-content: center;
align-items: center;
`
