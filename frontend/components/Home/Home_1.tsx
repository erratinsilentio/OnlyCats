/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';

const HomeOneStyles = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  z-index: 0;

  .gallery {
    z-index: 999;
    width: 100%;
    height: 60vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    overflow: hidden;
  }

  .gallery-text {
    width: 45%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 8vw;
  }

  .kitty {
    width: 40vw;
  }

  .text-title {
    width: 100%;
    height: 60%;
    font-size: 2.5rem;
    display: flex;
    align-items: flex-end;
    padding-bottom: 7%;
  }

  .text-subtitle {
    width: 100%;
    height: 30%;
    font-size: 1.5rem;
    color: var(--pall1);
    padding-top: 5%;
  }

  .text-button {
    width: 30%;
    height: 5vh;
    line-height: 5vh;
    background-color: var(--pall4);
    color: var(--pall1);
    text-align: center;
    margin-left: 1vh;

    &:hover {
      background-color: var(--pall1);
      color: crimson;
    }
  }

  .upper-bg {
    height: 55%;
    width: 100%;
  }

  .kitty {
    width: 40vw;
  }
  .lower-bg {
    height: 45%;
    width: 100%;
    background-color: var(--pall2);
    display: flex;
  }
`;

export default function HomeOne() {
  return (
    <HomeOneStyles>
      <div className="gallery">
        <img src="../static/kitty.svg" className="kitty" />
        <div className="gallery-text">
          <div className="text-title">Premium cat pictures</div>
          <div className="text-subtitle">New images everyday</div>
          <div className="text-button">SHOP NOW</div>
        </div>
      </div>
      <div className="upper-bg" />
      <div className="lower-bg" />
    </HomeOneStyles>
  );
}
