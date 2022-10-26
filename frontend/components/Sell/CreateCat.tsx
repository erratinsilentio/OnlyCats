import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import useForm from '../../utils/useForm';
import Form from './Form';
import ErrorMessage from '../../utils/Error';

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
    position: relative;
    overflow: hidden;
  }

  .cat {
    position: absolute;
    width: 48vw;
    bottom: -33%;
    left: -20%;
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
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="image" className="img-label">
            <input
              required
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              className="file-selector"
            />
            <div className="new-file">
              choose photo >>
              <div className="left">
                <img src="../static/upload.svg" />
              </div>
            </div>
            <ErrorMessage error={error} />

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
          <button type="submit">+ Add Cat</button>
        </fieldset>
      </Form>
      <div className="right">
        <img src="../static/kitty5.svg" className="cat" />
      </div>
    </Container>
  );
}
