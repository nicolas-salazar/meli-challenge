import styled from 'styled-components';
import { ContentColumn } from '../../styles';

export const HeaderContainer = styled.div`
  align-items:center;
  background-color: ${({ theme: { palette } }) => palette.primary.main};
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  flex: 0.75;
`;

export const Logo = styled.img`
  height: 35px;
  object-fit: contain;
`;

export const PaddedContent = styled(ContentColumn)`
  width: 100%
`;
