import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestIconsProps {}

const StyledTestIcons = styled.div`
  color: pink;
`;

export function TestIcons(props: TestIconsProps) {
  return (
    <StyledTestIcons>
      <h1>Welcome to TestIcons!</h1>
    </StyledTestIcons>
  );
}

export default TestIcons;
