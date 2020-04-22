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
    handleDelete
  } = props;

  const records = results.length !== 0;

  return (
    <Fragment>
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
            <TableBody className="results-table">
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
                    > 
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          :
            <TableBody className="empty-message">
              <TableRow>
                <TableCell align="center" colSpan={3} >
                  No records available
                </TableCell>
              </TableRow>
            </TableBody>
          }
        </Table>
      </TableContainer>
    </Fragment>
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
});

