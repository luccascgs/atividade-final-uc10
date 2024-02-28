import SideBar from "../components/SideBar";
import { Content, Cards, CardsRow, Main } from "./styles";

export default function HomeScreen() {
  return (
    <Main>
      <SideBar />
      <Content>
        <h1>Salvos</h1>
        <CardsRow>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
        </CardsRow>
        <h1>Estilo 2</h1>
        <CardsRow>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
        </CardsRow>
        <h1>Estilo 3</h1>
        <CardsRow>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
        </CardsRow>
        <h1>Estilo 1</h1>
        <CardsRow>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
          <Cards>
            <img src="https://picsum.photos/300/200" alt="Foto do Projeto" />
          </Cards>
        </CardsRow>
      </Content>
    </Main>
  );
}
