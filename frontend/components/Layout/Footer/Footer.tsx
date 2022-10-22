import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100vw;
  height: 4vh;
  line-height: 4vh;
  background-color: var(--pall4);
  text-align: center;
  color: var(--pall2);

  /* position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999; */
`;

export default function () {
  return (
    <FooterStyles>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'var(--pall2)' }}
        href="https://github.com/erratinsilentio"
      >
        ©2022 OnlyCats by erratinsilentio
      </a>
    </FooterStyles>
  );
}
