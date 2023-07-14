import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p, h1, h2, h3 {
    margin: 0;
    color: #314B5A;
  }
  h1, h2{
    margin-bottom: 8px;
  }
  `;
