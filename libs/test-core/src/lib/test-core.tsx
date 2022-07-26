import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestCoreProps {}

const StyledTestCore = styled.div`
  color: pink;
`;

export function TestCore(props: TestCoreProps) {
  return (
    <StyledTestCore>
      <h1>Welcome to TestCore!</h1>
    </StyledTestCore>
  );
}

export default TestCore;
