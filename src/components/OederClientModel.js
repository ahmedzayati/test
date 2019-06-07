import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    var order=this.props.orders.filter((order)=>order.numCommande===this.props.numCommande)[0]
    console.log(order)
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Detail
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Order Detail</DialogTitle>
          <DialogContent>
            <DialogContentText>Id=#{order.numCommande} </DialogContentText>
            <table>
              <tr>
                <th>Car</th>
                <th>Price</th>
                <th></th>
              </tr>
              <tr>
                <td>{order.nomVehicule}</td>
                <td>{order.prix}</td>
                <td><img src={"assets/images/"+order.path} alt="img" width="160" height="90"/> </td>
              </tr>
            </table>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Get Bill
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
