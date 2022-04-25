import React from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import LogoFju from '../img/Logo_Força_Jovem_Universal.svg'

export default function Relatorio({Gerar}) {
  return (
    <ContainerForm>
            <Logo src={LogoFju} alt='logotype' />
        <Form onSubmit={Gerar}>
            <Label htmlFor='tribo'>Qual a sua Tribo? </Label>

            <Tribos id='tribo'>
                <Option value='Efraim'>Efraim </Option>
                <Option value='Judá'>Judá</Option>
                <Option value='Levi'>Levi</Option>
                <Option value='Rúbem'>Rúbem</Option>
                <Option value='Manassés'>Manassés</Option>
                <Option value='Gade'>Gade</Option>
                <Option value='Benjamim'>Benjamim</Option>
                <Option value='Zebulom'>Zebulom</Option>
            </Tribos>

            <Label htmlFor='reuniao'>Qual a reunião? </Label>

                <Reuniao id='reuniao'>
                    <Option value='Encontro FJU'>Encontro FJU</Option>
                    <Option value='Quarta-feira'>Quarta-Feira</Option>
                    <Option value='Encontro FJU'>Domingo</Option>
                </Reuniao>
          

            <Label htmlFor='lider'>Líder da Tribo</Label>
            <NameInput type='text' id='lider' name='lider' placeholder='Digite o nome do líder'/>

            <Label htmlFor='novos'>Jovens novos ou distantes</Label>
            <NumberInput type='number' id='novos' name='novos' placeholder='0'/>

            <Label htmlFor='total'>Total de jovens</Label>
            <NumberInput type='number' id='total' name='total' placeholder='1' />

            <Label htmlFor='nome'>Nome dos jovens</Label>
            <NameInput type='text' id='nome' name='nome' placeholder='Digite o nome dos jovens'/>

            <Jovem>+ Add Jovem</Jovem>

            <GerarRelatorio type='submit'>Gerar Relatório</GerarRelatorio>
        </Form>
    </ContainerForm>
  )
}

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Logo = styled.img`
    max-width: 150px;
`

const Form = styled.form`
    min-width: 284px;
    min-height: 480px;
    max-height: 520px;
    background-color: #FFF;
    border-radius: 0.62rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
`

const Label = styled.label`
    font-size: 1rem;
`

const Tribos = styled.select`
    border-radius: 0.62rem;
    min-height: 30px;
    border: 1px solid #2C3343;
    background-color: #FFF;
    padding-left: 0.3rem;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const Option = styled.option`
`

const Reuniao = styled.select`
    border-radius: 0.62rem;
    min-height: 30px;
    border: 1px solid #2C3343;
    background-color: #FFF;
    padding-left: 0.3rem;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const NameInput = styled.input`
    border-radius: 0.62rem;
    min-height: 25px;
    border: 1px solid #2C3343;
    padding-left: 0.5rem;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const NumberInput = styled.input`
    border-radius: 0.62rem;
    max-width: 4.6rem;
    min-height: 25px;
    border: 1px solid #2C3343;
    padding-left: 0.5rem;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const Jovem = styled.button`
    width: 3.8rem;
    height: 1.5rem;
    font-size: 0.5rem;
    align-self: flex-end;
    border: none;
    border-radius: 0.5rem;
    background-color: #2C3343;
    color: #FFF;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #33456b;
    }

    &:active {
        transform: scale(0.96);
    }
`

const GerarRelatorio = styled.button`
    min-width: 134px;
    min-height: 34px;
    align-self: center;
    border: none;
    background-color: #BA2F2E;
    border-radius: 0.62rem;
    color: #FFF;
    cursor: pointer;
    font-size: 0.87rem;
    transition: all 0.4s;

    &:hover {
        background-color: #7f1914;
    }

    &:active {
        transform: scale(0.96);
    }
`