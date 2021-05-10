import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import store from './store';
import Routes from './Routes';

export const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
