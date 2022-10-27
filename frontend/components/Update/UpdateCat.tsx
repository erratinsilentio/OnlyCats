import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import ErrorMessage from '../../utils/Error';
import useForm from '../../utils/useForm';
import UpdateForm from './UpdateForm';

const SINGLE_CAT_QUERY = gql`
  query SINGLE_CAT_QUERY($id: ID!) {
    Cat(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_CAT_MUTATION = gql`
  mutation UPDATE_CAT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateCat(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateCat({ id }) {
  const { data, error, loading } = useQuery(SINGLE_CAT_QUERY, {
    variables: {
      id,
    },
  });

  const [
    updateCat,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_CAT_MUTATION, {
    variables: {
      id,
    },
  });

  const { inputs, handleChange, clearForm } = useForm(data?.Cat);

  if (loading) return <p>Loading...</p>;

  return (
    <UpdateForm
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateCat({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });
        Router.push({
          pathname: `/shop/${res.data.updateCat.id}`,
        });
      }}
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <ErrorMessage error={error} />
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
            minLength="3"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
            min="1"
            max="1000000"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Cat</button>
      </fieldset>
    </UpdateForm>
  );
}
