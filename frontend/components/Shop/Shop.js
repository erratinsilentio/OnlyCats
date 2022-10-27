import styled, { keyframes } from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Listing from './Listing';

export const ALL_CATS_QUERY = gql`
  query ALL_CATS_QUERY {
    allCats {
      id
      name
      price
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ShopStyles = styled.div`
  width: 95vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;

  .shop-header {
    margin-top: 2rem;
    width: 95vw;
    height: 10vh;
    position: relative;
  }

  .sh-bg {
    width: 96.5%;
    height: 15%;
    background-color: var(--pall4);
    transform: skew(-55deg);
    position: absolute;
    bottom: 0;
    left: 2%;
    z-index: 1;
  }

  .sh-txt {
    font-size: 3rem;
    position: absolute;
    z-index: 2;
    left: 5%;
    bottom: 30%;
    font-style: italic;
    color: #18181b;
  }

  .shop-content {
    width: 95vw;
    min-height: 80vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-bottom: 5vh;
    animation: ${appear} 1s;
  }

  .listing {
    width: 100px;
    height: 100px;
    overflow: hidden;
    outline: 1px solid black;
  }
`;
export default function Shop() {
  const { data, error, loading } = useQuery(ALL_CATS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>loading</p>;

  return (
    <ShopStyles>
      <div className="shop-header">
        <div className="sh-bg" />
        <div className="sh-txt">Shop</div>
      </div>
      <div className="shop-content">
        {data.allCats.map((cat) => (
          <Listing className="listing" cat={cat} />
        ))}
      </div>
    </ShopStyles>
  );
}
