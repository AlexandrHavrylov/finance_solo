import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(3)};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const UserAvatar = styled.span`
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.MainBgColor};
  padding: 9px 12px;
  border-radius: 50px;
  margin-right: 10px;
`;
