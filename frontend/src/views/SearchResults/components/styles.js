import styled from 'styled-components';

export const ItemSummaryContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
`;

export const PaddedContent = styled.div`
  align-items: center;
  border-bottom: 0.5px solid ${({ theme: { palette } }) => palette.grey['100']};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]}px;
  margin: ${({ theme: { spacing } }) => spacing[3]}px;
  padding-bottom: ${({ theme: { spacing } }) => spacing[3]}px;
  width: 100%;
`;

export const Thumbnail = styled.img`
  height: ${({ theme: { sizes } }) => sizes.thumbnail.medium}px;
  object-fit: contain;
  width: ${({ theme: { sizes } }) => sizes.thumbnail.medium}px;
`;

export const LocationLabel = styled.div`
  color: ${({ theme: { palette } }) => palette.grey['300']};  
  font-size: ${({ theme: { typography } }) => typography.caption2.fontSize};
  margin-bottom: ${({ theme: { spacing } }) => 1.25 * spacing[6]}px;
  width: ${({ theme: { sizes } }) => sizes.thumbnail.medium}px;
`;

export const MetadataContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: ${({ theme: { spacing } }) => spacing[3]}px;
`;

export const PriceLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
  font-weight: ${({ theme: { typography } }) => typography.subtitle1.fontWeight};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]}px;
`;

export const TitleLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body1.fontSize};
  font-weight: ${({ theme: { typography } }) => typography.body1.fontWeight};
  max-width: 50%;
`;

export const FreeShippingIcon = styled.img`
  height: ${({ theme: { sizes } }) => sizes.icons.medium}px;
  margin-left: ${({ theme: { spacing } }) => 1.25 * spacing[2]}px;
  width: ${({ theme: { sizes } }) => sizes.icons.medium}px;
`;
