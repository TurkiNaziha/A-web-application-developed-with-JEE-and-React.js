// import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 450,
    },
    tableContainer: {
        marginTop:0,
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 650
    },
    tableHeaderCell: {
        fontWeight: 'bold',
      backgroundColor:"#4c61ed",
      // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));
const test="Maaaa"
let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
USERS[0] = {
        name:"Nazouu",
   }
   USERS[1] = {
    name:"MOO",
}
USERS[2] = {
    name:test[0],
}
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         // name: faker.name.findName(),
//         name:"Nazouu",
//         name:"Nazouu",
//         // email: faker.internet.email(),
//         // phone: faker.phone.phoneNumber(),
//         // jobTitle: faker.name.jobTitle(),
//         // company: faker.company.companyName(),
//         // joinDate: faker.date.past().toLocaleDateString('en-US'),
//         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
//     }
// }

function Tableemp() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  >
          <TableRow >
            <TableCell className={classes.tableHeaderCell} >Employes</TableCell>
            <TableCell className={classes.tableHeaderCell}>Nom</TableCell>
            <TableCell className={classes.tableHeaderCell}>Prenom</TableCell>
            <TableCell className={classes.tableHeaderCell}>Experience</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                </TableCell>
              <TableCell>{row.joinDate}</TableCell>
              <TableCell>
                  {/* <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Active' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Blocked' && 'orange'))
                    }}
                  >{row.status}</Typography> */}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
           count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default Tableemp;