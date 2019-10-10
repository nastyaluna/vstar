import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
  },
}));

const SignUp = () => {
  const cls = useStyles();

  return (
      <Container component="main" maxWidth="xs">
        <div className={cls.paper}>
          <Typography component="h1" variant="h5">
            Register
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
            />
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                className={cls.submit}
            >
              Done
            </Button>
            <Button
                fullWidth
                to="/login"
                type="submit"
                color="primary"
                component={Link}
                variant="contained"
                className={cls.submit}
            >
              Already have account?
            </Button>
          </form>
        </div>
      </Container>
  );
};

export default SignUp;