import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const translate = keyframes`
  from {
    transform: translateX(-1000%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  margin-top: 10vh;
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Courier New", Courier, monospace;

  .box {
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .b {
    width: 50%;
    height: 70vh;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff8ea;
    opacity: 1;
    background-image: radial-gradient(#618989 0.65px, transparent 0.65px),
      radial-gradient(#618989 0.65px, #fff8ea 0.65px);
    background-size: 26px 26px;
    background-position: 0 0, 13px 13px;
    overflow: hidden;
  }

  img {
    animation: ${translate} 0.5s;
  }

  .right {
    padding: 1rem;
  }
  h1 {
    font-size: 2rem;
    margin-top: 1rem;
  }
  .content {
    margin-top: 2rem;
    padding: 1rem;
    width: 80%;
    height: auto;
    font-size: 1.2rem;
    line-height: 4vh;
    border-top: 1px solid var(--pall4);
    animation: ${appear} 1s;
  }

  p {
    margin: 1rem;
  }
`;

export default function About() {
  return (
    <Container>
      <div className="box">
        <div className="left b">
          <img src="../../static/ziutek.svg" />
        </div>
        <div className="right b">
          <h1>_About</h1>
          <div className="content">
            <p>Hello World!</p>
            <p>
              My name is Kacper. I created this page in the name of my beloved
              cat named Pridzi.
            </p>
            <p>
              When I get to finally sit in peace and do some coding, he jumps on
              my lap and sleeps there, while I create.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
