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
  display: flex;
  justify-content: center; // This will center the children horizontally
  width: 100%;
  background-color: pink;
  border: 1px solid #f7f6f3;
`;

export default Home;
