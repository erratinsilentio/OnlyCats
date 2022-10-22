/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/display-name */
import Link from 'next/link';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomeZero from './Home_0';
import HomeOne from './Home_1';
import HomeTwo from './Home_2';

export const HomeStyles = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default function Home() {
  return (
    <ParallaxProvider>
      <HomeStyles>
        <HomeZero />
        <HomeOne />
        <HomeTwo />
      </HomeStyles>
    </ParallaxProvider>
  );
}
