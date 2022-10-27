/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import nameFormat from '../../utils/nameFormatter';
import moneyFormat from '../../utils/moneyFormatter';

const ListingStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 35vw;
  text-align: right;
  background-color: var(--blue1);
  position: relative;
  cursor: pointer;

  .none {
    display: none;
  }

  .image {
    width: 28vw;
    height: 28vw;
    object-fit: cover;
    background-color: #fff8ea;
    opacity: 1;
    background-image: radial-gradient(#618989 2px, #fff8ea 2px);
    background-size: 40px 40px;
    &:hover {
      /* border-left: 10px solid var(--blue1);
      border-right: 10px solid var(--blue1);
      border-top: 10px solid var(--blue1); */
      background-color: var(--blue1);
    }
  }

  .box {
    width: 100%;
    padding-right: 1.5rem;
    position: relative;
  }
  .title {
    height: 3vw;
    font-size: 2rem;
    line-height: 3vw;
    color: white;
    background-color: var(--pall3);
  }
  .price {
    height: 2vw;
    font-size: 1.5rem;
    color: white;
    background-color: var(--pall2);
    position: relative;
  }

  .edit {
    text-decoration: none;
    color: white;
    position: absolute;
    left: 5%;
    top: 20%;
    font-size: 1rem;
  }
`;

export default function Listing({ cat }) {
  const [chosen, setChosen] = useState('');

  return (
    <Link href={`/shop/${cat.id}`}>
      <ListingStyles
        onMouseOver={() => setChosen(cat.name)}
        onMouseLeave={() => setChosen('')}
      >
        <img src={cat.photo.image.publicUrlTransformed} className="image" />
        <div className="title box">
          <div className="title-txt">{nameFormat(cat.name)}</div>
          <div className="title-bg" />
        </div>
        <div className="price box">
          <Link
            href={{
              pathname: 'update',
              query: {
                id: cat.id,
              },
            }}
          >
            <a className={chosen === cat.name ? 'chosen edit' : 'none'}>
              [edit]
            </a>
          </Link>
          <div className="price-txt">{moneyFormat(cat.price)} $</div>
          <div className="price-bg" />
        </div>
      </ListingStyles>
    </Link>
  );
}
