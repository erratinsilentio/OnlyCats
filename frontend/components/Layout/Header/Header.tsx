/* eslint-disable react/jsx-filename-extension */
import Link from "next/link";
import { useState } from "react";
import { HeaderStyles, NavStyles, NavButtonStyles } from "./HeaderStyles";
import { useUser } from "../../../utils/useUser";
import SignOut from "../../Other/SignOut";
import Cart from "../../Cart/Cart";

export default function Header() {
  const [cart, setCart] = useState(false);
  const user = useUser();
  console.log(user);

  const closeCart = () => setCart(false);

  return (
    <HeaderStyles>
      <Cart open={cart ? "open" : null} close={closeCart} />
      <NavStyles>
        <Link href="/about">
          <NavButtonStyles>About</NavButtonStyles>
        </Link>
        <Link href="/shop">
          <NavButtonStyles>Shop</NavButtonStyles>
        </Link>
        <Link href={user ? "/sell" : "/signin"}>
          <NavButtonStyles>Sell</NavButtonStyles>
        </Link>
      </NavStyles>
      <Link href="/">
        <div className="center-menu" style={{ fontSize: "2rem" }}>
          <img
            className="logo"
            src="https://see.fontimg.com/api/renderfont4/z8omG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/T25seUNhdHM/elmirta.png"
          />
        </div>
      </Link>

      <NavStyles>
        {user ? (
          <>
            <Link href="/account">
              <NavButtonStyles>Account</NavButtonStyles>
            </Link>
            <Link href="/">
              <NavButtonStyles>
                <SignOut />
              </NavButtonStyles>
            </Link>
            <NavButtonStyles onClick={() => setCart(true)}>
              Cart
            </NavButtonStyles>
          </>
        ) : (
          <>
            <Link href="/signin">
              <NavButtonStyles>Sign-in</NavButtonStyles>
            </Link>
            <Link href="/signup">
              <NavButtonStyles>Sign Up</NavButtonStyles>
            </Link>
          </>
        )}
      </NavStyles>
    </HeaderStyles>
  );
}
