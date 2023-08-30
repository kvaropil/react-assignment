import styled, { ThemeProvider } from 'styled-components';

import { Header } from '../src/components/Header';
import { theme } from '../styles/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
      </PageWrapper>
    </ThemeProvider>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: pink;
`;

export default Home;
