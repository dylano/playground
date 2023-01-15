import styled from 'styled-components';
import { Container } from './Container';
import { theme } from '../styles';
import { TimeMode } from '../constants';

const PersonStyle = styled(Container)`
  position: relative;
  z-index: 1;
  border-radius: 1rem;
  padding: 1.5rem;
  padding-bottom: 3rem;
  img {
    width: 4rem;
    border-radius: 50%;
    border: 3px solid white;
    margin-bottom: 2rem;
  }

  span {
    font-weight: 100;
    color: ${({ theme }) => theme.color.paleBlue};
  }

  h1 {
    font-weight: 300;
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
  }
`;

const ButtonListStyle = styled(Container)`
  position: relative;
  z-index: 0;
  padding: 1.5rem;
  padding-top: 3rem;
  border-radius: 1rem;
  transform: translateY(-1rem);
`;

const TimeButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  color: ${({ theme }) => theme.color.paleBlue};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem 0;

  &:hover {
    color: ${({ theme }) => theme.color.softBlue};
  }
`;

export function Person({ name, image, timeMode, updateMode }) {
  return (
    <div>
      <PersonStyle color="white" background={theme.color.blue}>
        <img src={image} alt={name} />
        <span>Report for</span>
        <h1>{name}</h1>
      </PersonStyle>
      <ButtonListStyle background={theme.color.darkBlue}>
        <TimeButton onClick={() => updateMode(TimeMode.daily)}>
          Daily{timeMode === TimeMode.daily ? ' •' : ''}
        </TimeButton>
        <TimeButton onClick={() => updateMode(TimeMode.weekly)}>
          Weekly{timeMode === TimeMode.weekly ? ' •' : ''}
        </TimeButton>
        <TimeButton onClick={() => updateMode(TimeMode.monthly)}>
          Monthly{timeMode === TimeMode.monthly ? ' •' : ''}
        </TimeButton>
      </ButtonListStyle>
    </div>
  );
}
