import React, { useContext } from "react";
import styled from "styled-components";
import Login from "./Login";
import Card from "./Card";
import Relatorio from "./Relatorio";
import { AppContext } from "../context/AppContext";

export default function Container() {
  const {entrar, report, card} = useContext(AppContext)

  return (
    <ContainerDiv>
      {entrar && (
        <Login/>
      )}
      {report && ( 
      <Relatorio /> 
      )}
      {card && (
        <Card />
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
