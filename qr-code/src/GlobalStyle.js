import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

#root {
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  font-weight: 400;

  margin: 0 auto;
  padding: 2rem;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  background: ${({ theme }) => theme.color.lightGray};
  margin: 0;
  padding: 0;
}

`;
