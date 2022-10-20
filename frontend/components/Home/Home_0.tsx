/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';

const HomeZeroStyles = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  .left-content1 {
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .behind1 {
    width: 75%;
    height: 30%;
    outline: 1px solid var(--pall4);
    margin-top: 0%;
    margin-right: 40%;
  }
  .behind2 {
    width: 75%;
    height: 30%;
    outline: 1px solid green;
    z-index: 10;
    position: absolute;
    margin-bottom: 10%;
    margin-left: 40%;
    background-color: var(--pall4);
  }
  .behind3 {
    width: 75%;
    height: 30%;
    z-index: 100;
    position: absolute;
    background-color: #881337;
    margin-left: 25%;
    margin-top: 10%;
    &:hover {
      background-color: #fde68a;
    }
  }

  .meow {
    width: 90%;
    height: 30vh;
    z-index: 1000;
    position: absolute;
    color: black;
    font-size: 12rem;
    filter: invert(1);
    mix-blend-mode: difference;
    padding-left: 1vh;
    margin-left: 10%;
  }

  .right-content1 {
    width: 45%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .kitty2 {
    margin-top: 10vh;
    left: 0px;
  }
`;

export default function HomeZero() {
  return (
    <HomeZeroStyles>
      <div className="left-content1">
        <div className="behind1" />
        <div className="behind2" />
        <div className="behind3" />
        <div className="meow">Meow?</div>
      </div>
      <div className="right-content1">
        <img src="../static/kitty2.svg" className="kitty2" />
      </div>
    </HomeZeroStyles>
  );
}
