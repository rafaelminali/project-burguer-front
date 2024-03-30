import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo_requests.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Image, User } from "./styles";
import H1 from "../../components/Title";
import Button from "../../components/Button";

const RowRequests = () => {
  const [orders, setOrder] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/pedidos"
      );

      setOrder(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/pedidos/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrder(newOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Logo} />
      <H1>Pedidos</H1>
      <ul>
        {orders.map((request) => (
          <User key={request.id}>
            <div>
              <p className="order">{request.order}</p>
              <p className="name">{request.name}</p>
            </div>
            <button onClick={() => deleteOrder(request.id)}>
              <img alt="trash" src={Trash} />
            </button>
          </User>
        ))}
      </ul>
      <Button isBack={true} onClick={goBackPage}>
        Voltar
      </Button>
    </Container>
  );
};

export default RowRequests;
