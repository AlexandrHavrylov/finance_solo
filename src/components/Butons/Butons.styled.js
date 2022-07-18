import styled from '@emotion/styled';

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background: ${props => props.theme.colors.MainBgColor};
  border-radius: 30px;
  color: ${props => props.theme.colors.mainTextColor};
  padding: ${props => props.theme.spacing(3)}
    ${props => props.theme.spacing(8.25)};

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.white};
  }
`;
