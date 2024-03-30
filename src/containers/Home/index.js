import React, { useState, useRef } from "react";
import Logo from "../../assets/logo_burguer.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Image, InputLabel, Input, ContainerInput } from "./styles";
import H1 from "../../components/Title";
import Button from "../../components/Button";

const Home = () => {
  const [requests, setRequests] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();

  function goRequests() {
    history.push("/Pedidos");
  }

  async function addNewRequest() {
    if (inputName.current.value === "" || inputOrder.current.value === "") {
      alert("Inserir Pedido");
    } else {
      const { data: newRequest } = await axios.post(
        "http://localhost:3001/Pedidos",
        {
          order: inputOrder.current.value,
          name: inputName.current.value,
        }
      );
      setRequests([...requests, newRequest]);
      goRequests();
    }
  }

  return (
    <Container>
      <Image alt="logo-image" src={Logo} />
      <H1>Faça seu Pedido!</H1>
      <ContainerInput>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />
      </ContainerInput>

      <ContainerInput>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Cliente" />
      </ContainerInput>

      <Button onClick={addNewRequest}>Cadastrar</Button>
    </Container>
  );
};

export default Home;
