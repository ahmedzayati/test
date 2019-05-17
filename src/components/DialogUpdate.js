import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { fetchPersonnels, updatePersonnel } from "../redux/ActionCreators";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
const mapDispatchToProps = dispatch => {
  return {
    fetchPersonnels: () => dispatch(fetchPersonnels()),
    updatePersonnel: personnel => dispatch(updatePersonnel(personnel))
  };
};
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});
class FormDialogUpdate extends React.Component {
  state = {
    open: false,
    email: this.props.personnel.email,
    nomPersonnel: this.props.personnel.nomPersonnel,
    prenomPersonnel: this.props.personnel.prenomPersonnel,
    salary: this.props.personnel.salaire,
    adresse: this.props.personnel.adresse,
    telephone: this.props.personnel.telephone,
    position: this.props.personnel.position,
    pseudo: this.props.personnel.pseudo,
    cin: this.props.personnel.cin
  };
  

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.updatePersonnel(this.state);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          aria-label="Update"
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <ThreeSixtyIcon className={classes.icon} />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Alter Personnel</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To modify a personnel please fill this following form
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
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Last Name"
                onChange={this.handleChange}
                name="prenomPersonnel"
                value={this.state.prenomPersonnel}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Pseudo"
                onChange={this.handleChange}
                name="pseudo"
                value={this.state.pseudo}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Position"
                onChange={this.handleChange}
                name="position"
                value={this.state.position}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Email"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                fullWidth
              />
              <TextValidator
                label="Salary"
                onChange={this.handleChange}
                name="salaire"
                value={this.state.salary}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Adress"
                onChange={this.handleChange}
                name="adresse"
                value={this.state.adresse}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Telephone"
                onChange={this.handleChange}
                name="telephone"
                value={this.state.telephone}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <br />
              <Button
                onClick={this.handleClose}
                color="primary"
                className="mt-3"
              >
                Cancel
              </Button>
              <Button type="submit" color="primary" className="mt-3">
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
  connect(
    null,
    mapDispatchToProps
  )(withStyles(styles)(FormDialogUpdate))
);
