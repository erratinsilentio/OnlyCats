import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';
import Form from './RequestResetForm';
import useForm from '../../utils/useForm';
import DisplayError from '../../utils/Error';
import { CURRENT_USER_QUERY } from '../../utils/useUser';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const appearFromBottom = keyframes`
  from {
    margin-top: 100vh;
  }

  to {
    margin-top: 0vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;

  Form {
    animation: ${appearFromBottom} 1s;
  }

  .left {
    width: 35vw;
    height: 75vh;
    position: relative;
    overflow: hidden;
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 80%;
    z-index: 2;
    bottom: 10%;
    background-color: #fff8ea;
    opacity: 0.8;
    background-image: radial-gradient(#618989 1px, transparent 1px),
      radial-gradient(#618989 1px, #fff8ea 1px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
  }

  .cat {
    position: absolute;
    width: 46vw;
    bottom: -33%;
    left: -20%;
    z-index: 5;
    animation: ${appear} 1s;
  }
`;

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });

  const [signin, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    resetForm();
  }

  return (
    <Container>
      <div className="left">
        <img src="../static/kitty11.svg" className="cat" />
        <div className="bg" />
      </div>
      <Form method="POST" onSubmit={handleSubmit}>
        <DisplayError error={error} />
        <fieldset>
          {data?.sendUserPasswordResetLink === null && (
            <p>Password reset successfuly</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />

          <button type="submit">reset</button>
        </fieldset>
      </Form>
    </Container>
  );
}
