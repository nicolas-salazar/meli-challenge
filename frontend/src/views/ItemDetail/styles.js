import styled from 'styled-components';

export const DetailContainerCard = styled.div`
  align-items: flex-start;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { radius } }) => radius[1]}px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing[3]}px;
  padding-left: ${({ theme: { spacing } }) => spacing[4]}px;
  padding-right: ${({ theme: { spacing } }) => spacing[4]}px;
  width: 100%;
`;

export const DetailFirstColumn = styled.div`
  flex: 7;
`;

export const DetailSecondColumn = styled.div`
  flex: 4;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${({ theme: { sizes } }) => sizes.thumbnail.large}px;
  width: ${({ theme: { sizes } }) => sizes.thumbnail.large}px;
`;

export const ProductImage = styled.img`
  height: 85%;
  object-fit: contain;
  width: 85%;
`;

export const DescriptionTitle = styled.p`
  font-size: ${({ theme: { typography } }) => typography.title.fontSize};
  margin-top: ${({ theme: { spacing } }) => spacing[5]}px;
`;

export const DescriptionText = styled.p`
  color: ${({ theme: { palette } }) => palette.grey['400']};
  font-size: ${({ theme: { typography } }) => typography.caption.fontSize};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]}px;
  margin-top: ${({ theme: { spacing } }) => spacing[4]}px;
`;

export const ConditionLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.overline.fontSize};
`;

export const ProductTitle = styled.p`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize};
  font-weight: ${({ theme: { typography } }) => typography.subtitle1.fontWeight};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]}px;
`;

export const PriceLabel = styled.p`
  font-size: ${({ theme: { typography } }) => typography.giant.fontSize};
  font-weight: ${({ theme: { typography } }) => typography.giant.fontWeight};
  margin-top: ${({ theme: { spacing } }) => spacing[4]}px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]}px;
`;

export const BuyButton = styled.button`
  background-color: ${({ theme: { palette } }) => palette.secondary.main};
  border-radius: ${({ theme: { radius } }) => radius[2]}px;
  border: none;
  color: ${({ theme: { palette } }) => palette.white};
  height: 40px;
  width: 75%;
`;
