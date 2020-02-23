import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { errorActions } from '../../actions';
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import ShoppingBasket from '../ShoppingBasket';
import { Switch, Route, withRouter } from 'react-router-dom';
import './mainContent.scss';

export function MainContent({ errors, clearErrors, history }) {
  const unlisten = history.listen(() => {
    if (errors.length > 0) clearErrors();
  });

  useEffect(() => {
    return () => unlisten();
  }, [unlisten]);

  return (
    <div className='page-wrapper'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/shoppingbasket' component={ShoppingBasket} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  errors: state.errors.errorList
});

const actionCreators = {
  clearErrors: errorActions.clearErrors
};

export default connect(mapStateToProps, actionCreators)(withRouter(MainContent));
