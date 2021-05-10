import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';

export const BreadcumLabel = styled.span`
  color: ${({ theme: { palette } }) => palette.grey['500']};
  cursor: pointer;
`;

export const BreadcumContainer = styled.p`
  align-items: center;
  color: ${({ theme: { palette } }) => palette.grey['500']};
  display: flex;
  font-size: ${({ theme: { typography } }) => typography.breadcum.fontSize};
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]}px;
  margin-top: ${({ theme: { spacing } }) => spacing[3]}px;
`;

export const SeparationIcon = styled(FaAngleRight)`
  margin-left: 5px;
  margin-right: 5px;
`;
