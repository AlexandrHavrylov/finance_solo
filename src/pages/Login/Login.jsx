import LoginForm from 'components/LoginForm/LoginForm';
import { SubTitle, TextWrapper, Wrapper, Title } from './Login.styled';

const Login = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Kapusta</Title>
        <SubTitle>Smart Finance</SubTitle>
      </TextWrapper>

      <LoginForm />
    </Wrapper>
  );
};

export default Login;
