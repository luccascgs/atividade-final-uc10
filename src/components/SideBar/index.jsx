import { NavBar, SideButton, CreateButton, User } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsTurnToDots,
  faHouse,
  faPager,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
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
  );
}
