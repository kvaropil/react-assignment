import { Header } from '../src/components/Header';
import styled from 'styled-components';

const Home = () => {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: pink;
  border: 1px solid #f7f6f3;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Home;
