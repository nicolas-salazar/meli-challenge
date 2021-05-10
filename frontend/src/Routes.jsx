/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import {
  ItemDetail,
  SearchBox,
  SearchResults,
} from './views';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route component={SearchBox} path="/" exact />
      <Route component={ItemDetail} path="/items/:id" exact />
      <Route component={SearchResults} path="/items" />
    </Switch>
  </MainLayout>
);

export default Routes;
