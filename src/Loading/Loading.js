import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginLeft: '-20px',
    marginTop: '-20px'
  }
}));

const Loading = () => {
  const cls = useStyles();

  return (
      <div className={cls.loading}>
        <CircularProgress disableShrink className={cls.loading}/>
      </div>
  );
};

export default Loading;