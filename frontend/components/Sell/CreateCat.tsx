import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import useForm from '../../utils/useForm';
import Form from './Form';

const Container = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .right {
    width: 50vw;
    height: 70vh;
    outline: 1px solid black;
  }
`;

const CREATE_CAT_MUTATION = gql`
  mutation CREATE_CAT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createCat(
      data: {
        name: $name
        description: $description
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateCat() {
  const { inputs, handleChange, clearForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createCat, { loading, error, data }] = useMutation(
    CREATE_CAT_MUTATION,
    {
      variables: inputs,
    }
  );
  return (
    <Container>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(inputs);
          await createCat({
            variables: inputs,
          });
          console.log(data);
          clearForm();
        }}
      >
        {/* <DisplayError error={error} /> */}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="image">
            Image
            <input
              required
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={inputs.name}
              onChange={handleChange}
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
          <button type="submit">+ Add Cat</button>
        </fieldset>
      </Form>
      <div className="right" />
    </Container>
  );
}
