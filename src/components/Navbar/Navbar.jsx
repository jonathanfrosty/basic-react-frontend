import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { userActions } from '../../actions';
import PropTypes from 'prop-types';
import './navbar.scss';

export function Navbar({ loggedIn, logout, username, history }) {
  useEffect(() => {
    if (loggedIn) history.push('/');
  }, [loggedIn, history]);
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
              <div className='nav-box username'>{username}</div>
            </li>

            <li>
              <Link className='nav-box logout' onClick={logout} to='/'>
                Log Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const { loggedIn, user } = state.auth;
  return { loggedIn, username: user ? user.username.content : '' };
};

const actionCreators = {
  logout: userActions.logout
};

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(Navbar));
