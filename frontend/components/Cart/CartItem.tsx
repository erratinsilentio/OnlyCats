import styled from "styled-components";
import moneyFormat from "../../utils/moneyFormatter";

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
    background-color: var(--pall3);
    border-bottom: 1px solid var(--pall1);
  }

  .name {
    width: 50%;
    height: 10vh;
    line-height: 10vh;
  }

  .price {
    width: 20%;
    height: 10vh;
    line-height: 10vh;
  }
`;

export default function Item({ item }) {
  const { product } = item;
  return (
    <ItemStyles>
      <img src={product.photo.image.publicUrlTransformed} />
      <p className="name">{product.name}</p>
      <p className="price">{moneyFormat(product.price)}</p>
    </ItemStyles>
  );
}
