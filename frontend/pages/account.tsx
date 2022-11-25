import styled from "styled-components";

const Container = styled.div`
  margin-top: 5vh;
  width: 100vw;
  height: 70vh;
  outline: 1px solid black;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default function Account() {
  return (
    <Container>
      <h1>Account</h1>
    </Container>
  );
}
