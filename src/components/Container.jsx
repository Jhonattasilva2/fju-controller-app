import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Relatorio from "./Relatorio";

export default function Container() {
  const [entrar, setEntrar] = useState(true);
  const [report, setReport] = useState(false);
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [invalido, setInvalido] = useState(false)

  function Entrar(e) {
   if (usuario === 'fjubelavista' && senha === 'belavista1401') {
     setEntrar(false)
     setReport(true)
     console.log('logou');
   } else {
    e.preventDefault()
     setInvalido(true)
   }
    
  }

  function Gerar(e) {
    e.preventDefault()
    
  }

  return (
    <ContainerDiv>
      {entrar && (
        <Login Entrar={Entrar} usuario={usuario} senha={senha} setUsuario={setUsuario} setSenha={setSenha} invalido={invalido}/>
      )}
      {report && ( 
      <Relatorio Gerar={Gerar} /> 
      )}
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background-color: #2c3343;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
