import styled from 'styled-components';

export const ItemSummaryContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const PaddedContent = styled.div`
  align-items: center;
  border-bottom: 0.5px solid ${({ theme: { palette } }) => palette.grey['100']};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing[3]}px;
  width: 100%;
`;

export const Thumbnail = styled.img`
  height: 180px;
  object-fit: contain;
  width: 180px;
`;

export const LocationLabel = styled.div`
  color: ${({ theme: { palette } }) => palette.grey['300']};  
  font-size: 12px;
  margin-bottom: ${({ theme: { spacing } }) => 1.25 * spacing[6]}px;
  width: 180px;
`;

export const MetadataContainer = styled.div`
  flex: 1;
  height: 100%;
`;
