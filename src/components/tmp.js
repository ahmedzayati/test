
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
import { closeSnackBar } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
const mapStateToProps = state => {
    return {
      cars: state.cars,
      orders: state.orders
    };
  };
  const mapDispatchToProps = dispatch => ({
    closeSnackBar:()=>dispatch(closeSnackBar())
  });
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => createStyles({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

class MySnackbarContentWrapper extends React.Component {
  
render(){
  return (
    <SnackbarContent
    style={{backgroundColor: green[600]}}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" style={{display: 'flex',
        alignItems: 'center'}}>
          <Icon  style={{opacity: 0.9,fontSize: 20}}/>
          {this.props.message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={()=>this.props.closeSnackBar()}>
          <CloseIcon style={{fontSize: 20}} />
        </IconButton>,
      ]}
    />
  );}
}export default
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MySnackbarContentWrapper)
  
