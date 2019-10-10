import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {login, resetAuth} from './actions';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  }
}));

const SignIn = ({auth, login, history, resetAuth}) => {
  const cls = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, error} = auth;

  useEffect(() => {
    resetAuth();
  }, []);

  const onLogin = async (e) => {
    e.preventDefault();
    resetAuth();
    // TODO: добавить нормальную валидацию
    if (email && password) {
      const response = await login(email, password);
      if (response && !response.message && !error) {
        history.push('/dashboard');
        resetAuth();
      }
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        {isLoading ? <Loading/> : (
          <Paper className={cls.paper}>
            <Avatar className={cls.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={cls.form} noValidate>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={e => setEmail(e.target.value)}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
              />
              {email && password && error && <Error msg={error}/>}
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={cls.submit}
                  onClick={onLogin}
              >
                Done
              </Button>
              <Button
                  fullWidth
                  to="/register"
                  color="secondary"
                  component={Link}
                  variant="contained"
                  className={cls.submit}
              >
                Don't have an account?
              </Button>
            </form>
          </Paper>
        )}
      </Container>
  );
};

export default withRouter(connect(({auth}) => {return {auth}}, {login, resetAuth})(SignIn));