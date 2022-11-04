/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Form from './SignUpForm';
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

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      email
      name
      id
    }
  }
`;

export default function SignUpForm() {
  const router = useRouter();

  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    clearForm();
  }

  return (
    <Container>
      <div className="left">
        <img src="../static/kitty11.svg" className="cat" />
        <div className="bg" />
      </div>
      <Form method="POST" onSubmit={handleSubmit}>
        <ErrorMessage error={error} />
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          autoComplete="name"
          value={inputs.name}
          onChange={handleChange}
        />
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

        <button type="submit">Sign Up!</button>
        {data?.createUser && (
          <Link href="/signin">
            <p>
              Signed up successfuly! <a>Log in</a>
            </p>
          </Link>
        )}
      </Form>
    </Container>
  );
}
