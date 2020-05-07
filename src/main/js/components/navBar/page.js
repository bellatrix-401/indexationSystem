import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';


export default function Page (props) {
  const classes = useStyles();

  const {
    instanceId,
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AttachFileIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Indexation System  <sub><i>{instanceId}</i></sub>
          </Typography>
          <Button className="button" color="inherit">
            <Link className={classes.links} to="/all">
              Ver Todos
            </Link>
          </Button>
          <Button className="button" color="inherit">
            <Link className={classes.links} to="/">
              Agregar
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    color: 'white',
    textDecoration: 'none'
  },
  textSub: {
    fontSize: 12,
    color: 'floralwhite',
  }
}));