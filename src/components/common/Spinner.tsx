import React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  margin: 50px auto;
  border: 16px solid ${(props) => props.theme.colors.beige};
  border-top: 16px solid ${(props) => props.theme.colors.green};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FC = () => {
  return <SpinnerWrapper />;
};
