import React from "react";
import { Link } from "react-router-dom";

import {postCommand} from './../redux/ActionCreators';
import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";
const mapStateToProps = state => {
  return {
    cars: state.cars,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => ({
  postCommand:(data)=>{dispatch(postCommand(data))}
});
class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adresseCmd:'',pays:'',ville:'',telephoneCmd:'',zip:''
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    
    data.append("adresseCmd", this.state.adresseCmd);
    data.append("pays", this.state.pays);
    data.append("ville", this.state.ville);
    data.append("telephoneCmd", this.state.telephoneCmd);
    data.append("zip", this.state.zip);
    data.append("cin", this.props.auth.user.cin);
    data.append("numVehicule", this.props.car[0].numVehicule);


   this.props.postCommand(data)
}
  render() {
    const carModels = this.props.car;
    
      console.log(carModels);
    
    // const allmodels = this.props.cars.cars.map.map(model => {
    //   return (
    //     <div
    //       style={{ backgroundColor: "#f3f8ff" }}
    //       className=" col-4 py-3 md-8"
    //     >
    //       <Card key={model.id} style={{ backgroundColor: "#deecff" }}>
    //         <CardImg
    //           top
    //           width="100%"
    //           src={"../" + model.path}
    //           alt="Card image cap"
    //         />
    //         <CardBody>
    //           <h2>
    //             {model.name} <Badge color="warning">{model.nomMarque}</Badge>
    //           </h2>
    //           <CardTitle />
    //           <CardSubtitle>
    //             <span class="product-grid__price">{model.prixProduit}</span>
    //           </CardSubtitle>
    //           <CardText>{model.description}</CardText>
    //           <center>
    //             {" "}
    //             <Link to={"/signup"}>
    //               <Button color="info">BUY NOW </Button>{" "}
    //             </Link>
    //             <Link to={`/cars/${model.id}`}>
    //               <Button color="secondary">show more</Button>
    //             </Link>
    //           </center>
    //         </CardBody>
    //       </Card>
    //     </div>
    //   );
    // });
    return (
      <div>
        <div class="page-top-info">
          <div class="container">
            <h4>Category PAge</h4>
            <div class="site-pagination">
              <Link to="/home">Home</Link> /
              <Link to={"/model/" + this.props.car[0].nomMarque}>
                {carModels[0].nomMarque}{" "}
              </Link>{" "}
              /<Link to={"/cars/" + carModels[0].nomVehicule}>{carModels[0].nomVehicule} </Link>
            </div>
          </div>
          <hr />
          <hr />
          <section class="checkout-section spad">
            <div class="container">
              <div class="row">
              <form onSubmit={this.handleSubmit} class="col-lg-8 order-2 order-lg-1">
                <div >
                  <div class="checkout-form">
                    <div class="cf-title">Billing Address</div>
                    <div class="row">
                      <div class="col-md-7">
                        <p>*Billing Information</p>
                      </div>
                      
                      <div class="col-md-5">
                        <div class="cf-radio-btns address-rb">
                          <div class="cfr-item">
                            <input type="radio" name="pm" id="one" />
                            <label for="one">Use my regular address</label>
                          </div>
                          <div class="cfr-item">
                            <input type="radio" name="pm" id="two" />
                            <label for="two">Use a different address</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row address-inputs">
                      <div class="col-md-12">
                        <input type="text" id="adresse" name="adresseCmd"
                                 placeholder="ADDRESS"
                                 value={this.state.adresseCmd}
                                 onChange={this.handleInputChange} />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text" id="pays" name="pays"
                          placeholder="Country"
                          value={this.state.pays}
                          onChange={this.handleInputChange}
                        />{" "}
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text" id="ville" name="ville"
                          placeholder="Town"
                          value={this.state.ville}
                          onChange={this.handleInputChange}
                        />{" "}
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text" id="zip" name="zip"
                          placeholder="ZIP CODE"
                          value={this.state.zip}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text" id="telephone" name="telephoneCmd"
                          placeholder="ACTIVE TEL"
                          value={this.state.telephoneCmd}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="col-md-6">
                      <input
                    required
                    ref={ref => {
                      this.uploadInput = ref;
                    }}
                    type="file"
                  />
                      </div>
                    </div>

                    <div id="items" />
                    { this.props.auth.isAuthentificated ?
                    <button class="site-btn submit-order-btn" type="submit" id="order2">
                      Place Order
                    </button>
                    : <button class="site-btn submit-order-btn" type="submit" disabled id="order2">
                    Please login to be able to place order
                  </button>}
                  </div>
                </div>
                </form>
                <div class="col-lg-4 order-1 order-lg-2">
                  <div class="checkout-cart">
                    <h3>Your Cart</h3>
                    <ul class="product-list">
                      <li>
                        <div class="pl-thumb">
                          <img
                            width="70%"
                            height="40%"
                            src={"../" + carModels[0].path}
                            alt=""
                          />
                        </div>
                        <h6>{carModels[0].nomVehicule}</h6>
                        <p>{carModels[0].prix}</p>
                      </li>
                    </ul>
                    <ul class="price-list">
                      <li>
                        Car<span>{carModels[0].nomVehicule}</span>
                      </li>
                      <li>
                        Price<span>{carModels[0].prix}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CheckoutComponent));
