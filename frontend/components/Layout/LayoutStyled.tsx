import styled, { createGlobalStyle } from 'styled-components';

export const LayoutStyles = styled.div``;

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'montserrat';
    src: url('https://fonts.google.com/specimen/Montserrat');
    font-weight: 300;
}
:root{
    --pall1: #FFF8EA;
    --pall2: #9e7676;
    --pall3: #815b5b;
    --pall4: #594545;
    --red1: crimson;
    box-sizing: border-box;
}

*, *:before, *:after{
    box-sizing: inherit;
}

body{
    background-color: var(--pall1);
    font-family: 'Courier New', Courier, monospace;
}

button{
    font-family: 'Courier New', Courier, monospace;
}

`;
