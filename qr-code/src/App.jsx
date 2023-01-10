import { useState } from 'react';
import qrCode from './assets/qr-code.png';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './components/Container';

const theme = {
  color: {
    default: 'orangeRed',
    white: 'hsl(0, 0%, 100%)',
    lightGray: 'hsl(212, 45%, 89%)',
    grayishBlue: 'hsl(220, 15%, 55%)',
    darkBlue: 'hsl(218, 44%, 22%)',
  },
};

function App() {
  const [color, setColor] = useState('default');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <img src={qrCode} alt="QR Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your skills to the
          next level.
        </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
