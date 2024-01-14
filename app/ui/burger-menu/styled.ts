import styled from "styled-components";

export const BurgerMenuHost = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: red;
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const BurgerLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: red;
  text-decoration: none;
  
  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const HamburgerWrapper = styled.button<{ open: boolean }>`
  position: fixed;
  left: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? `red` : `blue`};
  }
`;

