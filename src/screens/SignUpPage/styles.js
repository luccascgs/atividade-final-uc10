import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 550px;
  height: 650px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: #f2f2f2;
  box-shadow: 10px 10px 17.3px 0px rgba(0, 0, 0, 0.07);
`;

export const Cadastro = styled.div`
  h4 {
    width: 426px;
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  a {
    color: #1976d2;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  a:hover {
    color: blue;
    font-size: 20px;
    transition: 0.5s;
  }
`;

export const Colocardados = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  input {
    border-radius: 17px;
    background: #fff;
    width: 426px;
    height: 60px;
    padding: 10px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    outline-color: #1976d2;
    color: black;
    font-size: 20px;
    font-weight: 400;
  }
  button {
    width: 426px;
    height: 50px;
    padding: 0px 104px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #20c25b;
    border: none;
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
  button:hover {
    color: #000;
  }
`;

export const Painel = styled.div`
  display: flex;
  width: 426px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const Ou = styled.div`
  color: #bdbdbd;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LineLeft = styled.div`
  width: 182px;
  height: 2px;
  background-color: #bdbdbd;
`;

export const LineRight = styled.div`
  width: 182px;
  height: 2px;
  background-color: #bdbdbd;
`;
export const EntrarGoogle = styled.div`
  display: flex;
  width: 426px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 119px;
  background: #fff;
  border: none;

  &,
  h3,
  a {
    color: #1976d2;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  h3:hover {
    color: blue;
    font-size: 22px;
    transition: 0.5s;
  }
  img {
    margin-top: 25%;
    width: 45px;
    height: 45px;
    flex-shrink: 0;
  }
`;

export const EntrarMicrosoft = styled.div`
  display: flex;
  width: 426px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 119px;
  background: #fff;
  border: none;

  &,
  h3,
  a {
    color: #1976d2;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
  h3:hover {
    color: blue;
    font-size: 22px;
    transition: 0.5s;
  }
  img {
    margin-top: 25%;
    width: 45px;
    height: 45px;
    flex-shrink: 0;
  }
`;
