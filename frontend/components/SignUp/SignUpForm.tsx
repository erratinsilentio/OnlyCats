import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  /* box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05); */
  background: rgba(0, 0, 0, 0.02);
  border-left: 10px solid var(--blue1);
  padding: 20px;
  font-size: 1.5rem;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.5;
  font-weight: 100;
  min-height: 50vh;
  z-index: 6;
  background: rgb(221, 214, 200);
  background: linear-gradient(
    90deg,
    rgba(221, 214, 200, 1) 38%,
    rgba(255, 248, 234, 1) 100%
  );
  color: black;
  label {
    display: block;
    margin-bottom: 1rem;
    margin-top: 10px;
  }
  input,
  textarea,
  select {
    width: 80%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 0px solid black;
    margin-top: 10px;
    margin-bottom: 10px;

    &:focus {
      outline: none !important;
      border: 1px solid var(--blue1);
      box-shadow: 0 0 5px #719ece;
    }
  }

  textarea {
    overflow: scroll;
  }

  .img-label {
    position: relative;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .file-selector {
    position: absolute;
    bottom: 20%;
    opacity: 0;
    z-index: 1;
  }

  .new-file {
    position: absolute;
    bottom: 15%;
    left: 0%;
    z-index: 5;
    width: 60%;
    height: 70%;
    border: 3px solid var(--red1);
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding-left: 1rem;
    line-height: 6vh;
    border-radius: 5px;

    cursor: pointer;
    &:hover {
      background-color: var(--red1);
      color: var(--pall1);
    }
  }
  .left {
    height: 100%;
    width: 30%;
    background-color: var(--red1);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      color: white;
      filter: invert(99%) sepia(72%) saturate(422%) hue-rotate(30deg)
        brightness(114%) contrast(102%);
    }
  }

  button,
  input[type='submit'] {
    width: auto;
    background: var(--red1);
    color: white;
    border: 0;
    font-size: 2rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    background: rgb(136, 19, 55);
    background: linear-gradient(
      270deg,
      rgba(136, 19, 55, 1) 0%,
      rgba(170, 18, 81, 1) 35%,
      rgba(136, 19, 55, 1) 100%
    );
    margin-top: 10px;

    &:hover {
      filter: brightness(120%);
    }
  }
  button {
    margin-bottom: 15px;
  }

  a {
    color: var(--red1);
    &:hover {
      text-decoration: underline;
    }
  }
  fieldset {
    border: 0;
    padding: 0;
    width: 75%;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--pall4) 0%,
        var(--pall2) 50%,
        var(--pall4) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
