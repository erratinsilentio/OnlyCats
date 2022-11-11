import styled from "styled-components";
import { useUser } from "../../utils/useUser";
import Item from "./CartItem";

export const CartStyles = styled.div`
  position: fixed;
  right: 25%;
  top: 0;
  width: 50%;
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

  header {
    margin-top: 2rem;
    font-size: 2rem;
    height: 10vh;
    line-height: 10vh;
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
  }
  li {
    color: white;
    width: 100%;
    height: 10%;
    outline: 1px solid white;
  }
`;

export default function Cart() {
  const me = useUser();
  if (!me) {
    return null;
  }
  console.log(me);
  const { cart } = me;
  console.log(cart);
  return (
    <CartStyles open>
      <header>{me.name}'s cart</header>
      {cart.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </CartStyles>
  );
}
