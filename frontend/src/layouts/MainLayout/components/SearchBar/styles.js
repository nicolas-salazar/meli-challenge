import styled from 'styled-components';

export const InputContainer = styled.div`
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { radius } }) => radius[1]}px;
  display: flex;
  flex: 9;
  height: 35px;
  justify-content: center;
  margin-left:  ${({ theme: { spacing } }) => spacing[1]}px;
`;

export const SearchInput = styled.input`
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;
  border: none;
  flex: 1;
  height: 100%;
  padding-left: ${({ theme: { spacing } }) => spacing[3]}px;
  font-size: ${({ theme: { typography } }) => typography.breadcum.fontSize};

  ::placeholder {
    color: ${({ theme: { palette } }) => palette.text.secondary};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.grey['100']};
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 1px solid ${({ theme: { palette } }) => palette.grey['100']};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 35px;
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;
