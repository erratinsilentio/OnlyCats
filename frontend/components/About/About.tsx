import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const title = keyframes`
  from {
    color: var(--pall2);
  }

  to {
    color: var(--pall1);
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

const right3 = keyframes`
  from {
    right: -100%;
  }

  to {
    right: -3%;
  }
`;

const right5 = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 5%;
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
    position: relative;
  }
  h1 {
    font-size: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    color: var(--pall1);
  }
  .content {
    margin-top: 4rem;
    padding: 1rem;
    width: 80%;
    height: 80%;
    font-size: 1.2rem;
    line-height: 4vh;
    /* border: 1px solid var(--blue1); */
    box-shadow: 15px 10px 50px var(--pall4);
    z-index: 10;
    animation: ${appear} 2s;

    background-color: var(--pall1);
  }

  p {
    margin: 1rem;
  }

  .aa {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: -1;
    background-color: var(--pall2);
    animation: ${appear} 2s;
    animation: ${right5} 1s;
    box-shadow: 15px 10px 40px var(--pall4);
  }
  .bb {
    width: 80%;
    height: 80%;
    position: absolute;
    top: -3%;
    right: -3%;
    z-index: -2;
    background-color: var(--pall3);
    animation: ${appear} 3s;
    animation: ${right3} 0.5s;
    box-shadow: 15px 10px 30px var(--pall4);
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
            <div className="aa">
              <h1>About</h1>
            </div>
            <div className="bb" />
          </div>
        </div>
      </div>
    </Container>
  );
}
