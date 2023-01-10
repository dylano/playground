import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  padding: 1rem;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  transition: all 0.25s;
`;
