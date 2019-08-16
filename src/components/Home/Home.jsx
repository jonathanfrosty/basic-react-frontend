import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './home.scss';

export function Home({ username }) {
  return (
    <div className='home-wrapper'>
      <h1>hello {username}</h1>
      <h2>welcome to my app</h2>
    </div>
  );
}

Home.propTypes = {
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ username: state.auth.username });

export default connect(mapStateToProps)(Home);
