import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const muiTheme = createMuiTheme();

const App = () => {
  return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <h1>Vstar</h1>
      </MuiThemeProvider>
  );
};

export default App;
