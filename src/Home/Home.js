import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Lottie from 'react-lottie';
import animationData from './keep_walking';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

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
  return (
      <div className={cls.home}>
        <div className={cls.box}>
          <Lottie
              width={400}
              height={400}
              options={defaultOptions}
          />
        </div>
        <div className={cls.box}>
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
        </div>
      </div>
  );
};

export default Home;