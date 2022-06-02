import {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'
import RelatorioCard from './RelatorioCard'

export default function Relatorios() {
    const {cardRelatorios} = useContext(AppContext)

    return (
        <RelatoriosDiv>
            {cardRelatorios.map((cardRelatorio) => {
                return <RelatorioCard key={cardRelatorio.id} {...cardRelatorio}/>
            })}
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


