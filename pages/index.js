import styled, { ThemeProvider } from 'styled-components';

import { CaravansList } from '../src/components/Caravan/CaravansList';
import { Filters } from '../src/components/Filters';
import { Header } from '../src/components/Header';
import { Provider } from 'jotai';
import { theme } from '../styles/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <PageWrapper>
          <Header />
          <Filters />
          <CaravansList />
        </PageWrapper>
      </Provider>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* background-color: pink; */
`;

export default Home;
