import styled, { keyframes } from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Listing from './Listing';
import Pagination from './Pagination';
import { perPage } from '../../utils/config';

export const ALL_CATS_QUERY = gql`
  query ALL_CATS_QUERY($skip: Int = 0, $first: Int) {
    allCats(first: $first, skip: $skip) {
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

const width = keyframes`
  from {
    width: 0;
  }

  to {
    opacity: 99.5%;
  }
`;

const ShopStyles = styled.div`
  width: 95vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    width: 99.5%;
    height: 15%;
    background-color: var(--pall4);
    transform: skew(-55deg);
    position: absolute;
    bottom: 0;
    left: 0.5%;
    z-index: 1;
    animation: ${width} 0.5s;
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
  const { query } = useRouter();
  const page = parseInt(query.page);
  console.log(page);

  const { data, error, loading } = useQuery(ALL_CATS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

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
      <Pagination page={page || 1} />
    </ShopStyles>
  );
}
