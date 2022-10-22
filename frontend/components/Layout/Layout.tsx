import { LayoutStyles, GlobalStyles } from './LayoutStyled';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
      <Footer />
    </div>
  );
}
