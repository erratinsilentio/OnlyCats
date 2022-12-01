import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import moneyFormat from "../../utils/moneyFormatter";
import nameFormat from "../../utils/nameFormatter";

const Container = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    outline: 1px solid black;
    width: 45vw;
    height: 7.5vh;
    display: flex;
    flex-direction: row;
  }

  img {
    height: 7.5vh;
    width: 7.5vh;
  }

  p {
    height: 7.5vh;
  }

  .name {
    width: 40%;
    font-size: 1.5rem;
  }

  .price {
    font-size: 1.5rem;
    width: 40%;
  }

  .delete {
    width: 10%;
    height: 7.5vh;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export default function Order({ cart }) {
  return (
    <Container>
      {cart.map((item) => (
        <li>
          <img src={item.product.photo.image.publicUrlTransformed} />
          <p className="name">{nameFormat(item.product.name)}</p>
          <p className="price">{moneyFormat(item.product.price)}</p>
          <TiDelete className="delete" />
        </li>
      ))}
    </Container>
  );
}
