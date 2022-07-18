import { NavLink } from 'react-router-dom';
import { Wrapper } from './Navbar.styled';
import icons from '../../images/icons.svg';
import { useSelector } from 'react-redux';
import UserDataNavBar from './UserDataNavBar';

const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Wrapper>
      <NavLink to={'/finance'}>
        <svg width="90" height="31">
          <use href={icons + '#icon-logo'}> </use>
        </svg>
      </NavLink>
      {isLoggedIn && <UserDataNavBar />}
    </Wrapper>
  );
};

export default Navbar;
