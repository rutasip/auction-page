import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemsPage from './pages/Items';
import Item from './pages/Item';
import AuthPage from './pages/Auth';
import NotFoundPage from './pages/NotFound';
import Sell from './pages/Sell';
import isUserAuthenticated from './services/user';

const GuestRoute = ({ children }) => {
  return <>{isUserAuthenticated() ? <Redirect to="/" /> : children}</>;
};

GuestRoute.propTypes = {
  children: PropTypes.node.isRequired
};

const Routes = () => (
  <Switch>
    <Route path="/" component={ItemsPage} exact />
    <Route path="/item" component={Item} exact />
    <Route path="/sell" component={Sell} exact />
    <GuestRoute>
      <Route path="/signup" component={AuthPage} exact />
    </GuestRoute>
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
