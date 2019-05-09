import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const carModels = this.props.cars.cars;
    {
      console.log(carModels);
    }
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
              <Link to={"/model/" + carModels[0].nomMarque}>
                {carModels[0].categorie}{" "}
              </Link>{" "}
              /<Link to={"/cars/" + carModels[0].id}>{carModels[0].name} </Link>
            </div>
          </div>
          <hr />
          <hr />
          <section class="checkout-section spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 order-2 order-lg-1">
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
                        <input type="text" placeholder="Address" id="address" />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          placeholder="Pays"
                          id="pays"
                          name="pays"
                        />{" "}
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          placeholder="Ville"
                          id="ville"
                          name="ville"
                        />{" "}
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          placeholder="Zip code"
                          id="zipcode"
                          name="zipcode"
                        />
                      </div>
                      <div class="col-md-6">
                        <input
                          type="text"
                          placeholder="Téléphone no."
                          id="telephone"
                          name="telephone"
                        />
                      </div>
                    </div>

                    <div id="items" />

                    <button class="site-btn submit-order-btn" id="order2">
                      Place Order
                    </button>
                  </div>
                </div>
                <div class="col-lg-4 order-1 order-lg-2">
                  <div class="checkout-cart">
                    <h3>Your Cart</h3>
                    <ul class="product-list">
                      <li>
                        <div class="pl-thumb">
                          <img
                            width="70%"
                            height="40%"
                            src={"../" + carModels[0].src}
                            alt=""
                          />
                        </div>
                        <h6>{carModels[0].name}</h6>
                        <p>{carModels[0].price}</p>
                      </li>
                    </ul>
                    <ul class="price-list">
                      <li>
                        Car<span>{carModels[0].name}</span>
                      </li>
                      <li>
                        Price<span>{carModels[0].price}</span>
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
const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};
export default withRouter(connect(mapStateToProps)(CheckoutComponent));
