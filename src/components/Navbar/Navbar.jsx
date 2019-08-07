import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <h3>React App</h3>
      <ul className='nav-list'>
        <NavLink activeClassName='active' exact to={'/'}>
          <li name='home'>Home</li>
        </NavLink>
        <NavLink to={'/register'}>
          <li name='register'>Register</li>
        </NavLink>
        <NavLink to={'/shoppingbasket'}>
          <li name='shopping-basket'>Shopping Basket</li>
        </NavLink>
      </ul>
    </nav>
  );
}
