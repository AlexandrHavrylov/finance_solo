import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 448px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding: ${props => props.theme.spacing(13)} 84px;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.mainTextColor};
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(7.5)};
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const Input = styled.input`
  margin-top: ${props => props.theme.spacing(2.5)};
  width: 265px;
  background-color: ${props => props.theme.colors.MainBgColor};
  border: none;
  border-radius: 30px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  padding: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.mainTextColor};
  outline: none;

  &:hover,
  &:focus {
    outline: 1px solid ${props => props.theme.colors.accentColor};
  }
`;

export const GoogleLink = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.MainBgColor};
  border-radius: 26px;
  padding: ${props => props.theme.spacing(2.5)} 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  margin-bottom: ${props => props.theme.spacing(10)};
`;
