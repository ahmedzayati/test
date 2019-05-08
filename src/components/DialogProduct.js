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
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";

import {
 
  fetchPersonnels,
  postPersonnel,
  postProduct
} from "../redux/ActionCreators";
import axios from 'axios';
const mapDispatchToProps = dispatch => {
    
  return {

    fetchPersonnels: () => dispatch(fetchPersonnels()),
    postPersonnel:(personnel)=>dispatch(postPersonnel(personnel)),
    postProduct:(product)=>dispatch(postProduct(product))
  };
};
 class FormDialog extends React.Component {
  state = {
    open: false,description: '',nomProduit:'',prixProduit:'',
    marque:'',immatriculation:'',couleur:''
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
    
    
// this.props.postProduct(this.state);
this.handleUploadImage();
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleUploadImage() {

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    data.append('nomPrduit', this.state.nomProduit);
    data.append('prixProduit', this.state.prixProduit);
    data.append('immatriculation', this.state.immatriculation);
    data.append('couleur', this.state.couleur);
    data.append('description', this.state.description);

    axios.post('http://localhost:3000/api/cars', data)
      .then(function (response) {
  
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  render() {
    const { email } = this.state;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Product
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
                encType="multipart/form-data"
            >
                <TextValidator
                    label="Product Name"
                    onChange={this.handleChange}
                    name="nomProduit"
                    value={this.state.nomProduit}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Product Price"
                    onChange={this.handleChange}
                    name="prixProduit"
                    value={this.state.prixProduit}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Immatricule"
                    onChange={this.handleChange}
                    name="immatriculation"
                    value={this.state.immatriculation}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextValidator
                    label="Color"
                    onChange={this.handleChange}
                    name="couleur"
                    value={this.state.couleur}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    type="password"
                />
                
                <FormGroup>
          <Label for="marque">Select Marque</Label>
          <Input type="select" name="marque" id="marque">
            <option>BMW</option>
            <option>AUDI</option>
            <option>KIA</option>
            <option>MAZDA</option>
            <option>5</option>
          </Input>
        </FormGroup>
                
                <TextValidator
                    label="Description"
                    onChange={this.handleChange}
                    name="description"
                    value={this.state.description}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    multiline="true"
                />
                 <form >
          <div className="form-group">
            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>

          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
          </div>


        </form>
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