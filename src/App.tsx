import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F0F0F',
      light: '#353535',
      dark: '#000000',
    },
    secondary: {
      main: '#E9052F',
      light: '#FF5759',
      dark: '#AE0008'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>Hello</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
