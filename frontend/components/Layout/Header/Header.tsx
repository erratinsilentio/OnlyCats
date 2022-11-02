/* eslint-disable react/jsx-filename-extension */
import Link from 'next/link';
import { HeaderStyles, NavStyles, NavButtonStyles } from './HeaderStyles';
import { useUser } from '../../../utils/useUser';

export default function Header() {
  const user = useUser();
  console.log(user);

  return (
    <HeaderStyles>
      <NavStyles>
        <Link href="/about">
          <NavButtonStyles>About</NavButtonStyles>
        </Link>
        <Link href="/shop">
          <NavButtonStyles>Shop</NavButtonStyles>
        </Link>
        <Link href={user ? '/sell' : '/signin'}>
          <NavButtonStyles>Sell</NavButtonStyles>
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
        {user ? (
          <>
            <Link href="/account">
              <NavButtonStyles>Account</NavButtonStyles>
            </Link>
            <Link href="/account">
              <NavButtonStyles>Log out</NavButtonStyles>
            </Link>
            <Link href="/cart">
              <NavButtonStyles>Cart</NavButtonStyles>
            </Link>
          </>
        ) : (
          <Link href="/signin">
            <NavButtonStyles>Sign-in</NavButtonStyles>
          </Link>
        )}
      </NavStyles>
    </HeaderStyles>
  );
}
