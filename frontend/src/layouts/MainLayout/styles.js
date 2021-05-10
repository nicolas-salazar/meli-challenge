import styled from 'styled-components';

export const FullscreenContainer = styled.div`
  background-color: ${({ theme: { palette } }) => palette.grey['100']};
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100vw;
`;

export const ContentColumn = styled.div`
  display: flex;
  padding-left: 10vw;
  padding-right: 10vw;
  width: 100%;
`;
