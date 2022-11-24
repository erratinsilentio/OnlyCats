import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import Link from "next/link";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import moneyFormat from "../../utils/moneyFormatter";
import nameFormat from "../../utils/nameFormatter";

const DELETE_CART_ITEM_MUTATION = gql`
  mutation DELETE_CART_ITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

export const ItemStyles = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid var(--pall1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    height: 10vh;
    width: 10vh;
    border-bottom: 1px solid var(--pall1);
    object-fit: contain;
    background-color: #815b5b;
    opacity: 1;
    background-image: radial-gradient(#618989 0.5px, #815b5b 0.5px);
    background-size: 10px 10px;
  }

  .name {
    width: 50%;
    height: 10vh;
    line-height: 10vh;
    padding-left: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }

  .price {
    width: 30%;
    height: 10vh;
    line-height: 10vh;
    border-left: 1px solid var(--pall1);
    border-right: 1px solid var(--pall1);

    padding-left: 0.5rem;
  }

  .delete {
    width: 10%;
    height: 100%;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function Item({ item, close }) {
  const { product } = item;
  if (!product) return null;

  const stringID = item.id.toString();
  console.log(`string id: ${stringID}`);

  const [deleteItem, { data, loading, error }] = useMutation(
    DELETE_CART_ITEM_MUTATION,
    {
      variables: { id: stringID },
      update,
    }
  );

  return (
    <ItemStyles>
      <img src={product.photo.image.publicUrlTransformed} />
      <Link href={`/shop/cat/${product.id}`}>
        <p className="name" onClick={close}>
          {nameFormat(product.name)}
        </p>
      </Link>
      <p className="price">{moneyFormat(product.price)}</p>
      <TiDelete
        className="delete"
        onClick={(e) => {
          console.log(stringID);
          if (confirm("u sure bro?")) {
            deleteItem().catch((err) => alert(err.message));
            console.log(data, error, loading);
          }
          e.stopPropagation();
        }}
      />
    </ItemStyles>
  );
}
