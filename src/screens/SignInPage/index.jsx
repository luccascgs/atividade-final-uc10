import {
  Main,
  Container,
  Cadastro,
  Colocardados,
  EntrarGoogle,
  Painel,
  EntrarMicrosoft,
  Ou,
  LineRight,
  LineLeft,
} from "../SignUpPage/styles";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import Microsoft from "../../assets/images/microsoft.png";

export default function SignInPage() {
  return (
    <Main>
      <Container>
        <Cadastro>
          <h4>Login</h4>
          <p>
            Novo usuário? <Link to={"/signup"}>Crie uma Conta</Link>
          </p>
        </Cadastro>

        <Colocardados>
          <form>
            <input placeholder="E-mail" type="email" />
          </form>
          <input placeholder="Senha" type="password" />
          <Link to={"/"}>
            <button>Entrar</button>
          </Link>
        </Colocardados>

        <Painel>
          <LineLeft></LineLeft>
          <Ou>
            <p>Ou</p>
          </Ou>
          <LineRight></LineRight>
        </Painel>

        <Link to={"/"}>
            
          <EntrarGoogle>
            <div class="img">
              <img src={Google} alt="img-google" />
            </div>
            <h3>Entrar com Google</h3>
          </EntrarGoogle>
        </Link>

        <Link to={"/"}>
          <EntrarMicrosoft placeholder="Entrar com o Google">
            <div class="img">
              <img src={Microsoft} alt="img-microsoft" />
            </div>
            <h3>Entrar com Microsoft</h3>
          </EntrarMicrosoft>
        </Link>
      </Container>
    </Main>
  );
}
