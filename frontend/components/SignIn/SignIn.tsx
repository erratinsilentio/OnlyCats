/* eslint-disable react/jsx-filename-extension */
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';
import Form from './SignInForm';
import { CURRENT_USER_QUERY } from '../../utils/useUser';
import useForm from '../../utils/useForm';
import ErrorMessage from '../../utils/Error';

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

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignInForm() {
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });

  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signin();
    console.log(data);
    clearForm();
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <Container>
      <div className="left">
        <img src="../static/kitty11.svg" className="cat" />
        <div className="bg" />
      </div>
      <Form method="POST" onSubmit={handleSubmit}>
        <ErrorMessage error={error} />
        {/* <fieldset> */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">Sign in!</button>
        {/* </fieldset> */}
      </Form>
    </Container>
  );
}
