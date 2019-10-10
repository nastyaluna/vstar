import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Dashboard from '../Dashboard/Dashboard';
const muiTheme = createMuiTheme();

const App = () => {
  return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </MuiThemeProvider>
  );
};

export default App;
