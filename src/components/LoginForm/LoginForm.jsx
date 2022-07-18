import React, { useState } from 'react';
import {
  Form,
  GoogleLink,
  Input,
  Label,
  Text,
  Wrapper,
} from './LoginForm.styled';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import Butons from 'components/Butons/Butons';
import { login } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const [userData, SetUserData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    SetUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const onEnterClick = e => {
    e.preventDefault();
    dispatch(login(userData));
  };
  const onRegClick = () => {};
  return (
    <Wrapper>
      <Text>Вы можете авторизоваться с помощью Google Account:</Text>
      <GoogleLink href="https://kapusta-app-teamproject.herokuapp.com/api/auth/google">
        {' '}
        <FcGoogle size={18} />
        Google
      </GoogleLink>
      <Text>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Text>
      <Form>
        <Label>
          {' '}
          Электронная почта:
          <Input
            name="email"
            type="text"
            placeholder="your@email.com"
            onChange={onInputChange}
            value={userData.email}
          />
        </Label>
        <Label>
          {' '}
          Пароль:
          <Input
            name="password"
            type="password"
            onChange={onInputChange}
            value={userData.password}
          />
        </Label>
        <Butons
          fBtnText={'Войти'}
          fBtnType={'submit'}
          fBtnHandler={onEnterClick}
          sBtnText={'Регистрация'}
          sBtnType={'button'}
          sBtnHandler={onRegClick}
        />
      </Form>
    </Wrapper>
  );
}
