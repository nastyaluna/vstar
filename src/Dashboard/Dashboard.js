import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import makeAnimation from '../utils/makeAnimation';
import animationData from './astronaut';
import {makeStyles} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import {logout} from '../Auth/actions';
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Dashboard = ({logout}) => {
  const cls = useStyles();
  const animationOptions = makeAnimation(animationData);

  const onLogout = () => logout();

  return (
      <div className={cls.dashboard}>
        <Lottie
            width={400}
            height={400}
            options={animationOptions}
        />
        <Button
            to="/"
            type="submit"
            color="primary"
            component={Link}
            onClick={onLogout}
            variant="contained"
        >
          Come back to Earth
        </Button>
      </div>
  );
};

export default connect(null, {logout})(Dashboard);