import React, { useState } from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';
import { Switch, Route } from 'react-router-dom';
import './mainContent.scss';

export default function Page() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className='page-wrapper'>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
          path={'/register'}
          render={() => (
            <Register registered={registered} setRegistered={isReg => setRegistered(isReg)} />
          )}
        />

        <Route path={'/shoppingbasket'} component={ShoppingBasket} />
      </Switch>
    </div>
  );
}
