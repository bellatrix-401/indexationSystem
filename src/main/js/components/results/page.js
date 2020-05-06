import React, { Fragment } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline'; // quita conflictos de estilo
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import NavBar from '../navBar';
import { 
  TableRow, 
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableCell, 
  Button 
} from '@material-ui/core';


function Page (props) {
  const classes = useStyles();

  const {
    results,
    server,
    handleDelete
  } = props;

  const records = results.length !== 0;

  return (
    <div>
      <CssBaseLine />
      <NavBar />
      <TableContainer className={classes.paper} component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          {records ?
            <TableBody className="results-table" data-test="tableResults">
              {results.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell>{item.url}</TableCell>
                  <TableCell align="center">
                    <Button 
                      color="secondary"
                      className={classes.button}
                      onClick={() => handleDelete(item.url)}
                      startIcon={<DeleteIcon />}
                      data-test="buttonDelete"
                    > 
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          :
            <TableBody className="empty-message" data-test="tableEmpty">
              <TableRow>
                <TableCell align="center" colSpan={3} >
                  No records available
                </TableCell>
              </TableRow>
            </TableBody>
          }
        </Table>
      </TableContainer>
      {server ? 
        <footer className={classes.footer}>
          By {server}
        </footer>
      :
        <footer className={classes.footer}></footer>
      }
    </div>
  );
}

export default Page;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: 200,
    marginTop: 64
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  },
  button: {
    margin: 10,
  },
  footer: {
    background: '#ffffff',
    padding: 20,
    textAlign: 'left',
    color: '#828282'
  }
});

