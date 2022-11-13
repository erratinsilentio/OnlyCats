import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
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
  transition-duration: 0.3s;
  ${(props) => props.open && `transform: translateX(0);`}
  ${(props) => !props.open && `transform: translateX(1000%);`}
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
    height: 12vh;
    background-color: var(--pall1);
    font-size: 1.5rem;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .checkout {
    line-height: 12vh;
    text-align: center;
    width: 3vw;
    height: 3vw;
    color: var(--pall3);
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover {
      color: var(--pall4);
      width: 4vw;
      height: 4vw;
    }
  }
  .cc {
    overflow: hidden;
    height: 12vh;
    width: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border: 0px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    width: 5vh;
    height: 5vh;
    font-size: 1.5rem;
    transition-duration: 0.3s;
    &:hover {
      font-size: 2rem;
      color: black;
    }
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
      <button onClick={close}>x</button>
      <header>{nameFormat(me.name)}'s cart</header>
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
        <div className="cc">
          <IoIosArrowDroprightCircle className="checkout" />
        </div>
      </section>
    </CartStyles>
  );
}
