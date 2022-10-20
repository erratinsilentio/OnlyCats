import styled from 'styled-components';

export const HeaderStyles = styled.div`
  width: 94vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: var(--pall1);
`;

export const NavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: flex-end;
  background-color: var(--pall1);
`;

export const NavButtonStyles = styled.button`
  border: 0px;
  width: 10vw;
  height: 10vh;
  line-height: 5vh;
  background-color: var(--pall1);
  transition-duration: 0.1s;
  background-color: var(--pall1);
  &:hover {
    border-bottom: 1px solid var(--red1);
  }
`;
