
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { closeSnackBar } from "./../redux/ActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import MySnackbarContentWrapper from './tmp'
const mapStateToProps = state => {
    return {
      cars: state.cars,
      orders: state.orders
    };
  };
  const mapDispatchToProps = dispatch => ({
  });




const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class  CustomizedSnackbars extends React.Component {
 
constructor(props){
    super(props)

    this.state={open:false}
}
 handleClick=()=> {
    this.setState({open:false});
  }

   handleClose=(event, reason) =>{
    if (reason === 'clickaway') {
      return;
    }

    this.setState({open:false});
  }
render(){

    
  return (
    <div>
     
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.props.orders.snack}
      >
        <MySnackbarContentWrapper
          variant="success"
          message={this.props.orders.message}
        />
      </Snackbar>

    </div>
  );
}}

export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(CustomizedSnackbars)
  );