import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {  withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
 
  fetchPersonnels,
  postPersonnel
} from "../redux/ActionCreators";
const mapDispatchToProps = dispatch => {
    
  return {

    fetchPersonnels: () => dispatch(fetchPersonnels()),
    postPersonnel:(personnel)=>dispatch(postPersonnel(personnel))
  };
};
 class FormDialog extends React.Component {
  state = {
    open: false,email: '',nomPersonnel:'',prenomPersonnel:'',
    position:'',salaire:'',telephone:'',adresse:'',pseudo:'',dateEmbauche:'',password:''
  };


handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

handleSubmit = () => {
this.props.postPersonnel(this.state);
console.log(this.state)
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { email } = this.state;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Personnel
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Personnel</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a personnel please fill this following form
            </DialogContentText>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="First Name"
                    onChange={this.handleChange}
                    name="nomPersonnel"
                    value={this.state.nomPersonnel}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Last Name"
                    onChange={this.handleChange}
                    name="prenomPersonnel"
                    value={this.state.prenomPersonnel}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Pseudo"
                    onChange={this.handleChange}
                    name="pseudo"
                    value={this.state.pseudo}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    type="password"
                />
                <TextValidator
                    label="Position"
                    onChange={this.handleChange}
                    name="position"
                    value={this.state.position}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    fullWidth
                />
                <TextValidator
                    label="Date emb"
                    onChange={this.handleChange}
                    name="dateEmbauche"
                    value={this.state.dateEmbauche}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    type="date"
                />
                <TextValidator
                    label="Salary"
                    onChange={this.handleChange}
                    name="salaire"
                    value={this.state.salaire}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Adress"
                    onChange={this.handleChange}
                    name="adresse"
                    value={this.state.adresse}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Telephone"
                    onChange={this.handleChange}
                    name="telephone"
                    value={this.state.telephone}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <br />
                <Button onClick={this.handleClose} color="primary" className="mt-3">
              Cancel
            </Button>
            <Button type="submit" color="primary"  className="mt-3">
              Subscribe
            </Button>
            </ValidatorForm>
          </DialogContent>
         
        </Dialog>
      </div>
    );
  }
}
export default withRouter(
  connect(null, mapDispatchToProps)(FormDialog))