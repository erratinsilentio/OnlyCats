import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10vh;
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .box {
    width: 85%;
    height: 100%;
    border-top: 2px solid var(--pall3);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default function About() {
  return (
    <Container>
      <div className="box">
        <div className="left ">left</div>
        <div className="right">right</div>
      </div>
    </Container>
  );
}
