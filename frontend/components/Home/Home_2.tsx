/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';
import { useParallax, Parallax } from 'react-scroll-parallax';

const HomeTwoStyles = styled.div`
  width: 100%;
  height: 97vh;
  background-color: var(--pall2);
  display: flex;
  flex-direction: row;
  overflow: hidden;

  .lefttside {
    width: 35%;
    overflow: hidden;
  }

  .kitty {
    width: auto;
    height: 90vh;
  }

  .rightside {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background-color: var(--pall1);
  }

  .text {
    width: 80vw;
    height: 20%;
    font-size: 10rem;
    text-align: center;
    color: black;
    position: absolute;
    top: 0px;
  }

  .front{
    width: 70%;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    font-size: 1.15rem;
    position: absolute;
    /* background-color: var(--pall2); */
    background-color: #881337;
    color: var(--pall1);
    z-index: 100; 
  }
  .front1 {
    top: 200px;
  }
  .front2 {
    top: 300px;
    left: 50px;
  }
  .front3 {
    top: 400px;
    z-index: 100;
  }

  .bg{
    width: 70%;
    height: 10vh;
    background-color: #618989;
    /* background-color: #881337; */
    position: absolute;
    left: 100px;
    z-index: 10; 
  }

  .bg1 {
    top: 220px;
  }

  .bg2 {
    top: 320px;
  }

  .bg3 {
    top: 420px;
  }

  .btn{
    width: 18vw;
    height: 5vw;
    position: absolute;
    bottom: 60px;
    line-height: 5vw;
    text-align: center;
    outline: 2px solid var(--pall3);

    &:hover{
      background-color: var(--pall3);
      color: var(--pall1);
    }
  }
  .read{
    left: 100px;
  }
  .sign{
    left: 400px;
  }

  .paw {
    z-index: 90;
    position: absolute;
    right: -100px;
    bottom: 10px;
  }
`;

export default function HomeTwo() {
  const { ref } = useParallax({
    opacity: [-1, 3],
    scale: [0.5, 1.1],
    speed: 5,
    translateY: [10, 0],
    easing: 'ease',
  });

  const one = useParallax<HTMLDivElement>({
    scaleX: [0, 1],
    shouldAlwaysCompleteAnimation: true,
  });

  const two = useParallax<HTMLDivElement>({
    scaleX: [-1, 1],
    translateX: [100, -6],
    shouldAlwaysCompleteAnimation: true,
  });

  const three = useParallax<HTMLDivElement>({
    scaleX: [-1, 1],
    shouldAlwaysCompleteAnimation: true,
  });

  const opacity1 = useParallax<HTMLDivElement>({
    opacity: [-1, 3],
    shouldAlwaysCompleteAnimation: true,
    easing: [0, 0, 0, 0],
  });

  const opacity2 = useParallax<HTMLDivElement>({
    opacity: [-2, 3],
    shouldAlwaysCompleteAnimation: true,
    easing: [0.5, 0.5, 0, 0],
  });

  const opacity3 = useParallax<HTMLDivElement>({
    opacity: [-3, 3],
    shouldAlwaysCompleteAnimation: true,
    easing: [0.8, 0.8, 0, 0],
  });

  const main = useParallax<HTMLDivElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: [100, 0],
  });

  const paw = useParallax<HTMLDivElement>({
    shouldAlwaysCompleteAnimation: true,
    translateY: [100, 0],
  });

  return (
    <HomeTwoStyles>
      <div className="lefttside" ref={ref}>
        <img src="../static/kitty3.svg" className="kitty" />
      </div>
      <div className="rightside">
        <div className="text" ref={main.ref}>
          WHY US?
        </div>
        <div className="front front1" ref={opacity1.ref}>
        ONLY HIGH QUALITY PICTURES FROM AROUND THE WORLD
        </div>
        <div className="front front2" ref={opacity2.ref}>
          SATISFACTION GUARANTEED, UNLESS NOT SATISFIED
        </div>
        <div className="front front3" ref={opacity3.ref}>
          COMPANY REPRESENTED BY HIS MAJESTY ON THE LEFT, MR PIDGY
        </div>
        <div className="bg bg1" ref={one.ref} />
        <div className="bg bg2" ref={two.ref} />
        <div className="bg bg3" ref={three.ref} />
        <div className="btn read">READ MORE >> </div>
        <div className="btn sign">SIGN-UP >> </div>
        <img src="../static/paw.svg" className="paw" ref={paw.ref} />
      </div>
    </HomeTwoStyles>
  );
}
