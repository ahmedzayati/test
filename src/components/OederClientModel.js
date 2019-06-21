import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { withRouter ,Redirect} from "react-router-dom";
import {fetchOrdersByCliens,cancelOrder} from './../redux/ActionCreators';
import jsPDF from "jspdf";
const mapStateToProps = state => {
    return {
      cars: state.cars,
      auth: state.auth 
    };
  };
  const mapDispatchToProps = dispatch => ({
    fetchOrdersByCliens:(data)=>{dispatch(fetchOrdersByCliens(data))},
    cancelOrder:(order)=>{dispatch(cancelOrder(order))}
  })
 class FormDialog extends React.Component {
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
    
  const print = (a,b,e) => {
      // const string = renderToString(<Prints />);
      // const pdf = new jsPDF("p", "mm", "a4");
     
        let x=0;
        const doc = new jsPDF();
        let d= new Date();
        
    
        //doc.setTextColor(255,0,0);
        // if(c == 'facture'){
        //   doc.text('Facture',80,30);
        //
        // } else{
        //   doc.text('Devis',80,30);
        //
        // }
    
        doc.setFontSize(16);
       // doc.setTextColor(0,0,0);
        doc.text('Commande effectuée a : ',10,60);
        doc.text(d.toDateString(),80,60);
        doc.text("par "+e,130,60);
       // doc.setTextColor(0,230,0);
        doc.text('Nom Vehicule',20,90);
        doc.text(a,25,100);
        doc.text('Prix',90,90);
        doc.text(b.toString(),90,100);
        doc.text('Quantite',140,90);
        doc.text('1',140,100);
        
        //doc.addImage("./assets/img/cla.jpg", 'JPG', 15, 40, 180, 160);
    
        doc.setFontSize(40);
        doc.text('Master Car',10,30);
        doc.setFontSize(20);
        doc.setFontSize(50);
       
    
      
      // pdf.fromHTML(string);
      doc.save("pdf");
    };
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
            <Button onClick={()=>this.props.cancelOrder(order.numCommande)} color="primary">
              Cancel Bill
            </Button>
            <Button onClick={()=>print(order.nomVehicule,order.prix,order.nomClient+" "+order.prenomClient)} color="primary">
              Get Bill
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FormDialog));
