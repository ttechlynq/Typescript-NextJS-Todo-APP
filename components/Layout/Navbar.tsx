// Navbar.tsx
import React from 'react';
import AuthForm from '../Auth/AuthForm';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
`;

const Navbar: React.FC = () => {
//     const user = useSelector((state) => state.user);
  return (
    <NavbarContainer>
      {/* Navbar content */}
      <h1>Activity Log</h1>
{/*       { user ? <p>Welcome, {user.username}!</p> : <AuthForm />} */}
    </NavbarContainer>
  );
};

export default Navbar;
