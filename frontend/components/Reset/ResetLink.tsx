import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './RequestResetForm';
import { CURRENT_USER_QUERY } from './User';
import useForm from '../../utils/useForm';
import ErrorMessage from '../../utils/Error';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

export default function ResetLink({ token }) {
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await reset().catch(console.error);
    clearForm();
  }

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data.redeemUserPasswordResetToken.code
    : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <ErrorMessage error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
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
        <label htmlFor="password">New password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="password"
          value={inputs.password}
          onChange={handleChange}
        />

        <button type="submit">reset</button>
      </fieldset>
    </Form>
  );
}
