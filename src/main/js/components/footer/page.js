import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function Page (props) {
  const classes = useStyles();

  const {
    version,
  } = props;

  return (
    <footer className={classes.footer}>
      Version {version}
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#ffffff',
    padding: 10,
    textAlign: 'left',
    color: '#828282',
    height: '50px',
  }
}));