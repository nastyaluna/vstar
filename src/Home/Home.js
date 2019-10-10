import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles';
import makeAnimation from '../utils/makeAnimation';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import animationData from './keep_walking';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  home: {
    display: 'grid'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Home = () => {
  const cls = useStyles();
  const animationOptions = makeAnimation(animationData);

  return (
      <div className={cls.home}>
        <div className={cls.box}>
          <Lottie
              width={400}
              height={400}
              options={animationOptions}
          />
        </div>
        <div className={cls.box}>
          <Paper>
            <Button
                to="/login"
                size="large"
                color="primary"
                variant="contained"
                component={Link}
                className={cls.button}
            >
              Login
            </Button>
            <Button
                to="/register"
                size="large"
                color="secondary"
                variant="contained"
                component={Link}
                className={cls.button}
            >
              Register
            </Button>
          </Paper>
        </div>
      </div>
  );
};

export default Home;