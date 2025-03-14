import { Spinner } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const SpinnerComponent = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};
