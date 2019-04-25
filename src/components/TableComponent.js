import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {  withRouter } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { styled } from '@material-ui/styles';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import {
    addPersonnels,
    deletePersonnels,
    pushPersonnels,
    alterPersonnels,
    fetchPersonnels,
    deletePersonnel
  } from "../redux/ActionCreators";
let counter = 0;
function createData(cin,name, position, email, startDate, salary) {
  counter += 1;
  return { cin, name, position, email, startDate, salary };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'position', numeric: true, disablePadding: false, label: 'Position' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'startDate', numeric: true, disablePadding: false, label: 'Start Date' },
  { id: 'salary', numeric: true, disablePadding: false, label: 'Salary' },
  { id: 'add', numeric: true, disablePadding: false, label: '' },
  { id: 'update', numeric: true, disablePadding: false, label: '' }

];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <div className="row">
         <Button variant="contained" color="secondary" className={classes.button}>
        Add Personnel
        <AddIcon className={classes.rightIcon} />
      </Button>
       <MyButton>Styled Components</MyButton>;

        </div>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
                <div className="row">

            
          <Tooltip title="Delete" className="col-4">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" className="col-4">
          <IconButton aria-label="Delete">
          <ThreeSixtyIcon className={classes.icon} />
        </IconButton>
        </Tooltip>
        
        </div>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});
const mapStateToProps = state => {
    return {
      personnels: state.personnels
    };
  };
const mapDispatchToProps = dispatch => {
    
      return {
        deletePersonnel: id => dispatch(deletePersonnel(id)),
        onPushPersonnels: (code, pseudo) => dispatch(pushPersonnels(code, pseudo)),
        onAlterPersonnels: (id, salary, position) =>
          dispatch(alterPersonnels(id, salary, position)),
        fetchPersonnels: () => dispatch(fetchPersonnels())
      };
  };
class EnhancedTable extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    order: 'asc',
    orderBy: 'name',
    selected: [],
    data: [
        // createData('Ahmed', '305', '3.7', '67', '4.3'),
    //   this.props.personnels.personnels.map((personnel)=>{return(createData('Ahmed', '305', '3.7', '67', '4.3'))})
    ],
    page: 0,
    rowsPerPage: 5,
    l:0
  };
componentDidMount(){
  console.log("a")
  this.setState({l:this.props.personnels.personnels.length})
    this.props.fetchPersonnels()
    // .then((res)=>

    // {var x=[]
    // this.props.personnels.personnels.map((personnel)=>{x.push(createData(personnel.cin,personnel.nomPersonnel, '305', personnel.email, personnel.dateEmbauche, '4.3'))},)
    // this.setState({data:x})
    // console.log(this.state.data)})

}
componentWillMount(){
  // this.props.fetchPersonnels()
}
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.cin) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(this.props.personnels.personnels, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.cin);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.cin}
                      selected={isSelected}
                    >
                      <TableCell  padding="checkbox">
                        
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.nomPersonnel}
                      </TableCell>
                      <TableCell align="right">{n.position}</TableCell>
                      <TableCell align="right">{n.email}</TableCell>
                      <TableCell align="right">{n.startDate}</TableCell>
                      <TableCell align="right">{n.dateEmbauche}</TableCell>
                      <TableCell align="right" >
                        <Tooltip title="Delete" className="col-4">
                        <IconButton aria-label="Delete" >
                            <DeleteIcon onClick={() => {
                                  this.props.deletePersonnel(n.cin);console.log(n.cin)
                                }} />
                        </IconButton>
                         </Tooltip>
                     </TableCell>
                     <TableCell>
                         <Tooltip title="Update" className="col-4">
                                 <IconButton aria-label="Update">
                                 <ThreeSixtyIcon className={classes.icon} />
                        </IconButton>
                        </Tooltip>
        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
   connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EnhancedTable))

  );