import { Main, Container, Cadastro, Colocardados, EntrarGoogle, Painel, EntrarMicrosoft, Ou, LineRight, LineLeft } from "./styles";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import Microsoft from "../../assets/images/microsoft.png";

export default function SignUpPage() {
  return (
    <Main>

        <Container>
            <Cadastro>
                <h4>Cadastro</h4>
                <p>Já tem uma conta? <a href="../index.html">Fazer login</a></p>
            </Cadastro>

            <Colocardados>
                <form>
                    <input placeholder="E-mail" type="email" />
                    <input placeholder="Nome completo" type="text" />
                    <input placeholder="Senha" type="password" />
                    <input placeholder="Confirmar senha" type="password" />
                    <Link to={"/"}><button>Entrar</button></Link>
                </form>
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
                    <div><img src={Google} alt="img-google" /></div>
                    <h3>Entrar com Google</h3>
                </EntrarGoogle>
            </Link>

            <Link to={"/"}>
                <EntrarMicrosoft>
                    <div><img src={Microsoft} alt="img-microsoft" /></div>
                    <h3>Entrar com Microsoft</h3>
                </EntrarMicrosoft>
            </Link>

        </Container>

    </Main>
  );
};
