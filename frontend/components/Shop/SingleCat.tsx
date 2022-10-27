import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import ErrorMessage from '../../utils/Error';
import moneyFormat from '../../utils/moneyFormatter';
import nameFormat from '../../utils/nameFormatter';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const roll = keyframes`
  from {
    margin-left: 10vh;
  }

  to {
    margin-left: 0vh;
  }
`;

const SingleCatContainer = styled.div`
  margin-top: 10vh;
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  .box {
    min-width: 50%;
    min-height: 90%;
    max-height: 100%;
    overflow: hidden;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
  }

  .image-container {
    height: 60vh;
    overflow: hidden;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    background-color: #fff8ea;
    opacity: 1;
    background: repeating-linear-gradient(
      45deg,
      #618989,
      #618989 10px,
      #fff8ea 10px,
      #fff8ea 50px
    );

    animation: ${appear} 2s;
  }

  img {
    object-fit: contain;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 1rem;
    padding-left: 4rem;
    border-left: 5px solid var(--pall4);
    position: relative;
    z-index: 5;
    animation: ${roll} 2s;
  }

  .name {
    width: 80%;
    height: 15vh;
    font-size: 5rem;
    margin-bottom: 3vh;
  }
  .description {
    width: 80%;
    min-height: 10vh;
    max-height: 30vh;
    height: auto;
    line-height: 5vh;
    overflow: scroll;
    font-size: 1.5rem;
    margin-bottom: 4vh;
    opacity: 0.8;
    padding-left: 1rem;
    border-left: 2px solid var(--blue1);
  }

  .no-description {
    width: 80%;
    height: 10vh;
    font-size: 1rem;
    opacity: 0.5;
    margin-bottom: 4vh;
    padding-left: 1rem;
    border-left: 2px solid var(--blue1);
  }

  .price {
    width: 80%;
    height: 10vh;
    font-size: 3rem;
    margin-bottom: 3vh;
  }
  .button {
    width: 40%;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    background-color: var(--red1);
    color: white;
    cursor: pointer;
    &:hover {
      filter: brightness(120%);
    }
  }
`;

const SINGLE_CAT_QUERY = gql`
  query SINGLE_CAT_QUERY($id: ID!) {
    Cat(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleCat({ id }) {
  const { data, error, loading } = useQuery(SINGLE_CAT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { Cat } = data;

  return (
    <SingleCatContainer>
      <Head>
        <title>Only Cats | {nameFormat(Cat.name)}</title>
      </Head>
      <div className="left box">
        <div className="image-container">
          <img
            src={Cat.photo.image.publicUrlTransformed}
            alt={Cat.photo.altText}
          />
        </div>
      </div>
      <div className="right box">
        <div className="name">{nameFormat(Cat.name)}</div>
        <div className={Cat.description ? 'description' : 'no-description'}>
          {Cat.description
            ? Cat.description
            : 'Looks like this cat does not have a description!'}
        </div>
        <div className="price">{moneyFormat(Cat.price)} $</div>
        <div className="button">ADD TO CART</div>
      </div>
    </SingleCatContainer>
  );
}
