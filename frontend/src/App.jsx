import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './theme';
import store from './store';
import ReduxSample from './components/redux-sample';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ReduxSample />
    </ThemeProvider>
  </Provider>
);

export default App;
