import React, {useState} from 'react';
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
import {login} from './actions';
import Loading from '../Loading/Loading';

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

const SignIn = ({auth, login, history}) => {
  const cls = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {data, isLoading, isError, error} = auth;

  const onLogin = async (e) => {
    e.preventDefault();
    // TODO: add form validation
    const response = await login(email, password);
    if (response && !isError) history.push('/dashboard');
  };

  return (
      <Container component="main" maxWidth="xs">
        <Loading/>
      </Container>
  );
};

export default withRouter(connect(
    ({auth}) => {return {auth}},
    {login})
(SignIn));