import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userActions } from '../../actions';
import './navbar.scss';

export function Navbar({ loggedIn, logout }) {
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

        {!loggedIn && (
          <>
            <li>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
          </>
        )}

        {loggedIn && (
          <>
            <li>
              <NavLink className='nav-link' to='/shoppingbasket'>
                Shopping Basket
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link logout' onClick={logout} to='/'>
                Log Out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = state => {
  const { loggedIn } = state.auth;
  return { loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
