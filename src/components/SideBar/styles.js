import styled from "styled-components";
import { colors } from "../../variables";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 350px;
  height: 70vh;
  background-color: ${colors.lightGray};
  font-size: 1.1rem;
`;
export const SideButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: 300px;
  background-color: ${colors.white};
  * + * {
    padding-left: 1rem;
  }
`;
export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 332px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 1.1rem;
  border: solid 2px ${colors.darkOrange};
  border-radius: 0.5rem;
`;
export const User = styled.div`
  display: flex;
`;
