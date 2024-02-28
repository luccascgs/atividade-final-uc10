import styled from "styled-components";

export const Content = styled.div`
  margin-left: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 2rem;
  width: ${window.innerWidth - 350}px;
`;

export const Cards = styled.div``;

export const Main = styled.main`
  display: flex;
  h1 {
    margin: 0;
    margin-top: 2rem;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 1rem;
`;
