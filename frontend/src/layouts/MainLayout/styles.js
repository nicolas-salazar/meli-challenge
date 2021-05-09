import styled from 'styled-components';

export const FullscreenContainer = styled.div`
  background-color: ${({ theme: { palette } }) => palette.grey['100']};
  display: flex;
  height: 100vh;
  overflow: scroll;
  width: 100vw;
`;
