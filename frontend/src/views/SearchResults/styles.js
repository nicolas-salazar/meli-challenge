import styled from 'styled-components';

export const ResultsContainerCard = styled.div`
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { radius } }) => radius[1]}px;
  width: 100%;
`;
