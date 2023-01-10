import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color.white};
  width: 35vw;
  text-align: center;

  transition: all 0.2s;

  img {
    width: 100%;
    border-radius: 1rem;
  }

  &:hover {
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }

  h1 {
    padding: 0 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.darkBlue};
  }

  p {
    padding: 0 1rem;
    font-size: 1.2rems;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.grayishBlue};
  }
`;
