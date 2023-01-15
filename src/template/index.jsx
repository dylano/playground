import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { Container } from './components/Container';
import playIcon from './images/icon-play.svg';

const MyStyle = styled(Container)`
  h1 {
    color: ${({ theme }) => theme.color.default};
  }
  img {
    width: 5rem;
  }
`;

function Template() {
  return (
    <ThemeProvider theme={theme}>
      <MyStyle>
        <h1>Let's go!</h1>
        <img src={playIcon} alt="play" />
      </MyStyle>
    </ThemeProvider>
  );
}

export default Template;
