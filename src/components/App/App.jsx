import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../redux/auth/auth-selectors';
import * as authOperations from '../../redux/auth/auth-operations';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Finance from '../../pages/Finance/Finance';
import Expences from '../../pages/Expences/Expences';
import Income from '../../pages/Income/Income';
import Reports from '../../pages/Reports/Reports';
import { Wrapper } from './App.styled';
import ProtectedRoute from 'components/ProtectedRoutes/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    isLoggedIn ? navigate('/finance') : navigate('/login');
  }, [isLoggedIn, navigate]);

  return (
    <Wrapper>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/finance" element={<Finance />} />
          <Route path="expenses" element={<Expences />} />
          <Route path="income" element={<Income />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* any route below*/}
        <Route path="*" element={<Navigate replace to={'/'} />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
