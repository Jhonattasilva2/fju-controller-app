import React from 'react'
import styled from 'styled-components'

export default function RelatorioCard({Tribo, Reuniao, lider, date, novos, total}) {
  return (
    <Card>{Tribo}</Card>
  )
}


const Card = styled.div`
background-color: #f1f1f1;
min-height: 130px;
margin: 0.5rem;
border-radius: 0.62rem;
display: flex;
justify-content: center;
align-items: center;
`