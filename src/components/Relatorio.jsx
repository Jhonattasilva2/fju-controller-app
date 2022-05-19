import React, { useState} from 'react'
import styled from 'styled-components'
import LogoFju from '../img/Logo_Força_Jovem_Universal.svg'
import { useForm } from 'react-hook-form'

export default function Relatorio() {
    const [nomeJovem, setNomeJovem] = useState([{ nome: '' }])
    const { register, handleSubmit } = useForm()
    const dataAtual = new Date()
    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth() + 1
    const ano = dataAtual.getFullYear()
    const data = `${dia}/${mes}/${ano}`


    function Enviar(data) {
        fetch('http://localhost:3333/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    function addJovem() {
        setNomeJovem([...nomeJovem, { nome: '' }])
    }

    return (
        <ContainerForm>
            <Logo src={LogoFju} alt='logotype' />
            <Form onSubmit={handleSubmit(Enviar)}>
                <Label htmlFor='tribo'>Qual a sua Tribo? </Label>

                <Tribos id='tribo' {...register('Tribo')}>
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

                <Reuniao id='reuniao' {...register('Reuniao')}>
                    <Option value='Encontro FJU'>Encontro FJU</Option>
                    <Option value='Quarta-feira'>Quarta-Feira</Option>
                    <Option value='Encontro FJU'>Domingo</Option>
                    <Option value='Encontro FJU'>Templo</Option>
                </Reuniao>

                <Label htmlFor='lider'>Líder da Tribo</Label>
                <NameInput
                    type='text'
                    id='lider'
                    {...register('lider')}
                    placeholder='Digite o nome do líder'
                />

                <Label htmlFor='novos'>Jovens novos ou distantes</Label>
                <NumberInput
                    type='number'
                    id='novos'
                    {...register('novos')}
                    placeholder='0'
                />

                <Label htmlFor='total'>Total de jovens</Label>
                <NumberInput
                    type='number'
                    id='total'
                    {...register('total')}
                    placeholder='1'
                />

                <Label htmlFor='nome'>Nome dos jovens</Label>

                {nomeJovem.map((singleName, index) => {
                    return (
                        <>
                            <NameInput
                                key={index}
                                type='text'
                                id='nome'
                                {...register('nome' + index)}
                                placeholder='Digite o nome do jovem'
                            />
                            {nomeJovem.length - 1 === index &&
                                nomeJovem.length < 20 && (
                                    <Jovem onClick={addJovem}>
                                        + Add Jovem
                                    </Jovem>
                                )}
                        </>
                    )
                })}
                <Hidden type='hidden' id='date' {...register('date')} value={data}></Hidden>
                <GerarRelatorio type='submit'>Enviar Relatório</GerarRelatorio>
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
    max-height: 100%;
    background-color: #fff;
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
    border: 1px solid #2c3343;
    background-color: #fff;
    padding-left: 0.3rem;

    &:hover {
        border: 1px solid #4169e1;
    }
`

const Option = styled.option``

const Reuniao = styled.select`
    border-radius: 0.62rem;
    min-height: 30px;
    border: 1px solid #2c3343;
    background-color: #fff;
    padding-left: 0.3rem;

    &:hover {
        border: 1px solid #4169e1;
    }
`

const NameInput = styled.input`
    border-radius: 0.62rem;
    min-height: 25px;
    border: 1px solid #2c3343;
    padding-left: 0.5rem;
    margin: 0.5rem 0;

    &:hover {
        border: 1px solid #4169e1;
    }
`

const NumberInput = styled.input`
    border-radius: 0.62rem;
    max-width: 4.6rem;
    min-height: 25px;
    border: 1px solid #2c3343;
    padding-left: 0.5rem;

    &:hover {
        border: 1px solid #4169e1;
    }
`

const Jovem = styled.button`
    min-width: 3.8rem;
    height: 1.5rem;
    font-size: 0.5rem;
    align-self: flex-end;
    border: none;
    border-radius: 0.5rem;
    background-color: #2c3343;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #33456b;
    }

    &:active {
        transform: scale(0.96);
    }
`

const Hidden = styled.input``

const GerarRelatorio = styled.button`
    min-width: 134px;
    min-height: 34px;
    align-self: center;
    border: none;
    background-color: #ba2f2e;
    border-radius: 0.62rem;
    color: #fff;
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
