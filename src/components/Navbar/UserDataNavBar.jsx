import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { UserAvatar } from './Navbar.styled';

export default function UserDataNavBar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const onExitClick = () => {
    dispatch(logout());
  };
  const avatar = user.avatarURL;
  return (
    <div>
      <UserAvatar>A </UserAvatar>
      <span>{user.name}</span>
      <button onClick={onExitClick}>Выйти</button>
    </div>
  );
}
