import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { Category } from './components/Category';
import { Person } from './components/Person';
import timeData from './data.json';
import { TimeMode } from './constants';
import * as Icon from './components/Icon';
import personImage from './images/image-jeremy.png';

const categoryTheme = {
  work: {
    color: theme.color.softOrange,
    icon: Icon.work,
  },
  study: {
    color: theme.color.lightRed,
    icon: Icon.study,
  },
  exercise: {
    color: theme.color.limeGreen,
    icon: Icon.exercise,
  },
  social: {
    color: theme.color.violet,
    icon: Icon.social,
  },
  'self care': {
    color: theme.color.softYellow,
    icon: Icon.selfCare,
  },
  play: {
    color: theme.color.softBlue,
    icon: Icon.play,
  },
};

const ReportLayout = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 15rem);
  width: 100vw;
  background: ${({ theme }) => theme.color.veryDarkBlue};
`;

const PersonStyle = styled.div`
  grid-row: 1/3;
`;

function App() {
  const [timeMode, setTimeMode] = useState(TimeMode.daily);

  return (
    <ThemeProvider theme={theme}>
      <ReportLayout>
        <PersonStyle>
          <Person
            name="Jeremy Robson"
            image={personImage}
            timeMode={timeMode}
            updateMode={setTimeMode}
          />
        </PersonStyle>
        {timeData.map((category) => {
          const { color, icon } = categoryTheme[category.title.toLowerCase()];
          return (
            <Category
              key={category.title}
              title={category.title}
              color={color}
              icon={icon}
              timeData={category.timeframes}
              timeMode={timeMode}
            />
          );
        })}
      </ReportLayout>
    </ThemeProvider>
  );
}

export default App;
