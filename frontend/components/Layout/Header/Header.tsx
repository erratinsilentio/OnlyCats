/* eslint-disable react/jsx-filename-extension */
import Link from 'next/link';
import { HeaderStyles, NavStyles, NavButtonStyles } from './HeaderStyles';

export default function Header() {
  return (
    <HeaderStyles>
      <NavStyles>
        <Link href="/about">
          <NavButtonStyles>About</NavButtonStyles>
        </Link>
        <Link href="/shop">
          <NavButtonStyles>Shop</NavButtonStyles>
        </Link>
        <Link href="/orders">
          <NavButtonStyles>Orders</NavButtonStyles>
        </Link>
      </NavStyles>
      <Link href="/">
        <div className="center-menu" style={{ fontSize: '2rem' }}>
          <img
            className="logo"
            src="https://see.fontimg.com/api/renderfont4/z8omG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/T25seUNhdHM/elmirta.png"
          />
        </div>
      </Link>
      <NavStyles>
        <Link href="/profile">
          <NavButtonStyles>Profile</NavButtonStyles>
        </Link>
        <Link href="/">
          <NavButtonStyles>Sign-in</NavButtonStyles>
        </Link>
        <Link href="/cart">
          <NavButtonStyles>Cart</NavButtonStyles>
        </Link>
      </NavStyles>
    </HeaderStyles>
  );
}
