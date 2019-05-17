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
import { fetchCars, updateCar } from "../redux/ActionCreators";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
const mapDispatchToProps = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars()),
    updateCar: car => dispatch(updateCar(car))
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
class CarUpdate extends React.Component {
  state = {
    open: false,
    nomMarque: this.props.car.nomMarque,
    nomVehicule: this.props.car.nomVehicule,
    prix: this.props.car.prix,
    couleur: this.props.car.couleur,
    path: this.props.car.path,
    description: this.props.car.description,
    numVehicule: this.props.car.numVehicule
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
    this.props.updateCar(this.state);
    this.handleUploadImage();
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
          <DialogTitle id="form-dialog-title">Alterdd car</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To alter a car please fill this following form
            </DialogContentText>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <TextValidator
                label="product name "
                onChange={this.handleChange}
                name="product name"
                value={this.state.nomVehicule}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="marque Name"
                onChange={this.handleChange}
                name="Marque"
                value={this.state.nomMarque}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="prix"
                onChange={this.handleChange}
                name="prix"
                value={this.state.prix}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="couleur"
                onChange={this.handleChange}
                name="position"
                value={this.state.couleur}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />

              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    ref={ref => {
                      this.uploadInput = ref;
                    }}
                    type="file"
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    ref={ref => {
                      this.fileName = ref;
                    }}
                    type="text"
                    placeholder="Optional name for the file"
                    value={this.state.path}
                  />
                </div>
              </form>
              <br />
              <TextValidator
                label="description"
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
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
  )(withStyles(styles)(CarUpdate))
);
