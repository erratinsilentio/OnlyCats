import styled from 'styled-components';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const SuccessStyles = styled.div`
  /* padding: 2rem; */
  background: white;
  /* margin: 2rem 0; */
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  line-height: 7vh;
  text-align: center;
  height: 7vh;
  width: 10vw;
`;

export default function ErrorMessage({ error }) {
  if (!error || !error.message) {
    // return <SuccessStyles>Yay!</SuccessStyles>;
    return null;
  }

  return <ErrorMessage>Error!</ErrorMessage>;
}
