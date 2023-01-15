import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

#root {
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 400;

  margin: 0 auto;
  padding: 2rem;
}

body {
  margin: 0;
  padding: 0;
}
`;

export const theme = {
  color: {
    default: '#aaa',
  },
};
