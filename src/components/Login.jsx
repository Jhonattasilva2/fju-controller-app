import React from 'react'
import styled from 'styled-components'
import Invalido from './Invalido'
import LogoFju from '../img/Logo_Força_Jovem_Universal.svg'

export default function Login({Entrar, usuario, senha, setUsuario, setSenha, invalido}) {
  
    
  return (
    <LoginBox>
        <Logo src={LogoFju} alt='logotype' />
        <Formulario onSubmit={Entrar}>
            <LoginLabel htmlFor='login'>Login</LoginLabel>
            <InputLogin value={usuario} onChange={(e) => setUsuario(e.target.value)} type='text' id='login'/>
            <LoginLabel htmlFor='senha'>Senha</LoginLabel>
            <InputSenha value={senha} onChange={(e) => setSenha(e.target.value)} type='password' id='senha' />
            {invalido && (<Invalido/>)}
            <Button>ENTRAR</Button>
        </Formulario>
    </LoginBox>
  )
}

const LoginBox = styled.div`
    background-color: #FFF;
    min-width: 270px;
    min-height: 260px;
    max-height: 300px;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const Logo = styled.img`
    max-width: 150px;
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -0.5rem;
`

const LoginLabel = styled.label`
    margin-bottom: 0.1rem;
`
const InputLogin = styled.input`
    min-width: 219px;
    min-height: 29px;
    border: 1px solid #2C3343;
    border-radius: 0.62rem;
    margin-bottom: 1rem;
    text-align: center;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const InputSenha = styled.input`
    min-width: 219px;
    min-height: 29px;
    border: 1px solid #2C3343;
    border-radius: 0.62rem;
    text-align: center;

    &:hover {
        border: 1px solid #4169E1;
    }
`

const Button = styled.button`
    width: 6.25rem;
    height: 2.12rem;
    border: none;
    border-radius: 0.62rem;
    color: #FFF;
    font-size: 0.75rem;
    margin: 1rem;
    background-color: #BA2F2E;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        background-color: #7f1914;
    }

    &:active {
        transform: scale(0.96);
    }
`