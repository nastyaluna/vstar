import React from 'react';
import Lottie from 'react-lottie';
import makeAnimation from '../utils/makeAnimation';
import animationData from './astronaut';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dashboard: {
    display: 'grid'
  }
}));

const Dashboard = () => {
  const cls = useStyles();
  const animationOptions = makeAnimation(animationData);

  return (
      <div className={cls.dashboard}>
        <Lottie
            width={400}
            height={400}
            options={animationOptions}
        />
      </div>
  );
};

export default Dashboard;