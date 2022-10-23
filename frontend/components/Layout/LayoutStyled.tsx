import styled, { createGlobalStyle } from 'styled-components';

export const LayoutStyles = styled.div``;

export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

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
    --red1: #881337;
    --blue1: #618989;
    box-sizing: border-box;
}

*, *:before, *:after{
    box-sizing: inherit;
}

body{
    background-color: var(--pall1);
    /* font-family: 'Courier New', Courier, monospace; */
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0;
    line-height: 1;

}

button{
    font-family: 'Courier New', Courier, monospace;
}

`;
