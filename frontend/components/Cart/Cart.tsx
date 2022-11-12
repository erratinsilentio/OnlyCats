import styled from "styled-components";
import { useUser } from "../../utils/useUser";
import Item from "./CartItem";
import moneyFormat from "../../utils/moneyFormatter";
import nameFormat from "../../utils/nameFormatter";

export const CartStyles = styled.div`
  position: fixed;
  z-index: 9999;
  right: 0%;
  top: 0;
  width: 30vw;
  height: 100vh;
  background-color: var(--pall2);
  color: white;
  transform: translateX(1000%);
  font-family: "Courier New", Courier, monospace;
  ${(props) => props.open && `transform: translateX(0);`}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 10px 5px 50px black;

  header {
    font-size: 2rem;
    height: 12vh;
    line-height: 12vh;
    width: 100%;
    text-align: center;
    background-color: var(--blue1);
  }
  ul {
    width: 100%;
    min-height: 10vh;
    height: 50vh;
    outline: 1px solid white;
    color: white;
    overflow: scroll;
  }

  .total {
    width: 100%;
    height: 15vh;
    background-color: var(--pall1);
    font-size: 1.5rem;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    margin-bottom: 1rem;
    line-height: 6vh;
  }
`;

export default function Cart({ open, close }) {
  const me = useUser();
  if (!me) {
    return null;
  }
  console.log(me);
  const { cart } = me;
  console.log(cart);
  return (
    <CartStyles open={open}>
      <header onClick={close}>{nameFormat(me.name)}'s cart</header>
      {cart.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <section className="total">
        <p>Total:</p>
        <p>
          {moneyFormat(
            cart.reduce((prev, current) => prev + current.product.price, 0)
          )}
        </p>
      </section>
    </CartStyles>
  );
}
