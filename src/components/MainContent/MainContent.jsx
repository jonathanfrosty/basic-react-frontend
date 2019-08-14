import React from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';
import { Switch, Route } from 'react-router-dom';
import './mainContent.scss';

export default function MainContent() {
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
