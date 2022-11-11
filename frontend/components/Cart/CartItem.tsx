import styled from "styled-components";
import moneyFormat from "../../utils/moneyFormatter";
import nameFormat from "../../utils/nameFormatter";

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
  }

  .price {
    width: 25%;
    height: 10vh;
    line-height: 10vh;
    border-left: 1px solid var(--pall1);
    padding-left: 0.5rem;
  }
`;

export default function Item({ item }) {
  const { product } = item;
  if (!product) return null;
  return (
    <ItemStyles>
      <img src={product.photo.image.publicUrlTransformed} />
      <p className="name">{nameFormat(product.name)}</p>
      <p className="price">{moneyFormat(product.price)}</p>
    </ItemStyles>
  );
}
