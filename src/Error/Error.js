import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  error: {
    color: 'red'
  }
}));

const Error = ({msg}) => {
  const cls = useStyles();
  return (
      <div className={cls.error}>{msg}</div>
  );
};

export default Error;