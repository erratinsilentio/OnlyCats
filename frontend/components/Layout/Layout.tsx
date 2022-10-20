import { LayoutStyles, GlobalStyles } from './LayoutStyled';
import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
    </div>
  );
}
