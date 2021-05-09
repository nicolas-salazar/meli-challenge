import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      Hey there
    </div>
  </ThemeProvider>
);

export default App;
