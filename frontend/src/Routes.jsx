import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { ItemDetail, SearchBox, SearchResults } from './views';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route component={SearchBox} path="/" exact />
      <Route component={SearchResults} path="/items" exact />
      <Route component={ItemDetail} path="/items/:id" exact />
      <Redirect to="/" />
    </Switch>
  </MainLayout>
);

export default Routes;
