import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100vw;
  height: 4vh;
  line-height: 4vh;
  background-color: var(--pall4);
  text-align: center;
  color: var(--pall2);
`;

export default function () {
  return (
    <FooterStyles>
      <a
        style={{ textDecoration: 'none', color: 'var(--pall2)' }}
        href="https://github.com/erratinsilentio"
      >
        ©2022 OnlyCats by erratinsilentio
      </a>
    </FooterStyles>
  );
}
