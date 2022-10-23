/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';
import { useParallax, Parallax } from 'react-scroll-parallax';

const HomeZeroStyles = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: row;

  .left-content1 {
    min-width: 55%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .behind1 {
    min-width: 70vw;
    min-height: 35%;
    outline: 1px solid var(--pall4);
    top: 32.5%;
    right: 80px;
    z-index: 1;
    position: absolute;
  }
  .behind2 {
    min-width: 70%;
    min-height: 30%;
    z-index: 10;
    position: absolute;
    bottom: 32%;
    left: 55%;
    background-color: var(--pall4);
  }
  .behind3 {
    min-width: 75%;
    min-height: 20%;
    z-index: 100;
    position: absolute;
    background-color: #881337;
    left: 25%;
    bottom: 29%;

    &:hover {
      background-color: #fde68a;
    }
  }
  .meow {
    width: 90%;
    height: 30vh;
    z-index: 9999;
    position: absolute;
    color: black;
    font-size: 12rem;
    filter: invert(1);
    mix-blend-mode: difference;
    padding-left: 1vh;
    left: 15%;
  }
  .right-content1 {
    width: 45%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 999;
  }
  .kitty2 {
    margin-top: 10vh;
    left: 0px;
  }
`;

const ParallaxOne = ({ name }) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: 7 });
  return <div className={name} ref={ref} />;
};

const ParallaxTwo = ({ name }) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: 4 });
  return <div className={name} ref={ref} />;
};

const ParallaxThree = ({ name }) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: 1 });
  return <div className={name} ref={ref} />;
};

export default function HomeZero() {
  const { ref } = useParallax({ speed: 75 });

  return (
    <HomeZeroStyles>
      <div className="left-content1">
        <ParallaxThree name="behind1" />
        <ParallaxTwo name="behind2" />
        <ParallaxOne name="behind3" />
        <div className="meow" ref={ref}>
          Meow?
        </div>
      </div>
      <div className="right-content1">
        <Parallax translateX={['-100px', '200px']}>
          <img src="../static/kitty2.svg" className="kitty2" />
        </Parallax>
      </div>
    </HomeZeroStyles>
  );
}
