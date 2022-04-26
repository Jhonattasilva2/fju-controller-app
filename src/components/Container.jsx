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
   } else {
    e.preventDefault()
     setInvalido(true)
   }
    
  }

  return (
    <ContainerDiv>
      {entrar && (
        <Login Entrar={Entrar} usuario={usuario} senha={senha} setUsuario={setUsuario} setSenha={setSenha} invalido={invalido}/>
      )}
      {report && ( 
      <Relatorio /> 
      )}
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background-color: #2c3343;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
