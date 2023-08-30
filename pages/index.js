import styled, { ThemeProvider } from 'styled-components';

import { Filters } from '../src/components/Filters';
import { Header } from '../src/components/Header';
import { theme } from '../styles/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
        <Filters />
      </PageWrapper>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: pink;
`;

export default Home;
