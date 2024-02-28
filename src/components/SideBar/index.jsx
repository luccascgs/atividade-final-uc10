import {
  NavBar,
  SideButton,
  CreateButton,
  User,
  Content,
  Cards,
  CardsRow,
  Main,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsTurnToDots,
  faHouse,
  faPager,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <Main>
      <NavBar>
        <div>
          <User>
            <FontAwesomeIcon icon={faUser} />
            <span>Nome do Usuário</span>
          </User>
          <SideButton>
            <FontAwesomeIcon icon={faHouse} />
            <span>Início</span>
          </SideButton>
          <SideButton>
            <FontAwesomeIcon icon={faArrowsTurnToDots} />
            <span>Scrums</span>
          </SideButton>
          <SideButton>
            <FontAwesomeIcon icon={faPager} />
            <span>Templates</span>
          </SideButton>
        </div>
        <CreateButton>Criar Projeto</CreateButton>
      </NavBar>
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
