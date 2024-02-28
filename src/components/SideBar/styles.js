import styled from "styled-components";
import { colors } from "../../variables";

export const NavBar = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 100vh;
  background-color: ${colors.lightGray};
  font-size: 1.1rem;
  -webkit-box-shadow: 5px 0px 26px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 0px 26px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 0px 26px 0px rgba(0, 0, 0, 0.2);
`;
export const SideButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  padding: 0.5rem 1rem;
  font-weight: 600;
  background-color: ${colors.white};
  * + * {
    padding-left: 1rem;
  }
  &:hover {
    color: white;
    background-color: gray;
    transition: all 0.2s;
  }
`;
export const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: 600;
  &:hover {
    background-color: ${colors.darkOrange};
    transition: all 0.2s;
  }
`;
export const User = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  :nth-child(1) {
    width: 1.2rem;
    background-color: gray;
    border: gray solid 4px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
