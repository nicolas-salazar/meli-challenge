import styled from 'styled-components';

export const HeaderContainer = styled.div`
  align-items:center;
  background-color: ${({ theme: { palette } }) => palette.primary.main};
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  padding-left: ${({ theme: { spacing } }) => 5 * spacing[4]}px;
  padding-right: ${({ theme: { spacing } }) => 5 * spacing[4]}px;
  width: 100%;
`;

export const Logo = styled.img`
  flex: 1;
  height: 35px;
  object-fit: contain;
`;
