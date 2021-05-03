import React from 'react';

import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreateCar from '../pages/CreateCar';
import Car from '../pages/Car';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/create" component={CreateCar} />
    <Route path="/:id" component={Car} />

  </Switch>
);

export default Routes;
