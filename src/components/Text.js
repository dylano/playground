import styled from 'styled-components';

export const Text = styled.span`
  color: ${({ theme, color }) => theme.color[color] || theme.color.default};
  font-size: ${({ size }) => (size ? `${size}rem` : null)};
`;
