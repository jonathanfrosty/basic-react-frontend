import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <Link className='app-title' to='/'>
        React App
      </Link>
      <ul className='nav-list'>
        <li>
          <NavLink className='nav-link' activeClassName='active' exact to='/'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className='nav-link' to='/register'>
            Register
          </NavLink>
        </li>

        <li>
          <NavLink className='nav-link' to='/shoppingbasket'>
            Shopping Basket
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
