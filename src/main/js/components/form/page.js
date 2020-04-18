import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import AppBar from '../appBar';

function Page (props) {

  const classes = useStyles();

  const {
    onChangeText,
    handleSubmit
  } = props;

  return (
    <Fragment>
      <AppBar />
      <Paper className={classes.paper}>
        <form 
          className={classes.form} 
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <TextField
              required
              className={classes.field}
              label="URL"
              id="url"
              onChange={(e) => onChangeText(e)}
            />
          </div>
          <div>
            <TextField
              required
              className={classes.field}
              label="Word"
              id="word"
              onChange={(e) => onChangeText(e)}
              inputProps={{
                maxLength: 15
              }}
            />
          </div>
          <Button className={classes.myButton} type="submit">
            Search
          </Button>
        </form>
      </Paper>
    </Fragment>
  );
}

export default Page;

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  },
  form: {
    marginTop: theme.spacing(8)
  },
  myButton: {
    background: '#3f51b5',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 45,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #ACB5BE',
    margin: theme.spacing(3, 0, 2),
  },
  field: {
    width: 500
  }
}));