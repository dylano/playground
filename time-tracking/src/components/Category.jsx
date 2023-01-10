import styled from 'styled-components';
import { Container } from './Container';
import { ellipsis } from './Icon';
import { TimeMode } from '../constants';

const pastPeriod = {
  [TimeMode.daily]: 'Yesterday',
  [TimeMode.weekly]: 'Last Week',
  [TimeMode.monthly]: 'Last Month',
};

const CategoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
`;

const Title = styled(Container)`
  justify-content: space-between;
  padding: 1.5rem;
  padding-bottom: 0;

  img {
    height: 100%;
    cursor: pointer;
    align-self: center;
  }
`;

const Header = styled.div`
  display: flex;
  background: ${({ background }) => background};
  flex-direction: row-reverse;
  overflow-y: hidden;
  height: 4rem;
  border-radius: 1rem 1rem 0 0;
  padding: 0 1rem;

  img {
    height: 125%;
    width: auto;
    transform: translateY(-10px);
  }
`;

const Detail = styled.div`
  background: ${({ theme }) => theme.color.darkBlue};
  color: white;
  border-radius: 1rem;
  transform: translateY(-1rem);

  h1 {
    font-size: 3rem;
    font-weight: 200;
    margin: 0;
    padding: 0 1.5rem;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.color.paleBlue};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
`;

export function Category({ title, color, icon, timeData, timeMode }) {
  return (
    <CategoryStyle>
      <Header background={color}>
        <img src={icon} alt={title} />
      </Header>

      <Detail>
        <Title row>
          <h3>{title}</h3>
          <img src={ellipsis} alt="" />
        </Title>
        <Flex>
          <h1>{timeData[timeMode]?.current ?? 0}hrs</h1>
          <p>
            {pastPeriod[timeMode]} - {timeData[timeMode]?.previous ?? 0}hrs
          </p>
        </Flex>
      </Detail>
    </CategoryStyle>
  );
}
