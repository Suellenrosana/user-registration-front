import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  ContainerInputs,
  Input,
  Form,
  InputLabel,
} from "././styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
  }
  return (
    <>
      <Container>
        <TopBackground />

        <Form>
          <Title>Cadastro de Usuários</Title>

          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input
                type="text"
                placeholder="Nome do Usuário"
                ref={inputName}
              />
            </div>
            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input
                type="number"
                placeholder="Idade do Usuário"
                ref={inputAge}
              />
            </div>
          </ContainerInputs>

          <div style={{ width: "100%" }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input
              type="email"
              placeholder="E-mail do Usuário"
              ref={inputEmail}
            />
          </div>

          <Button type="button" onClick={registerNewUser} theme="primary">
            Cadastrar Usuário
          </Button>
        </Form>
        <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
          Ver Lista de Usuários
        </Button>
      </Container>
    </>
  );
}

export default Home;
