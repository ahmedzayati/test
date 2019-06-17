import React from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import CustomizedSnackbars from './snackBar'
import { postCommand ,fetchCars} from "./../redux/ActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";




const mapStateToProps = state => {
  return {
    cars: state.cars,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => ({
  postCommand: data => {
    dispatch(postCommand(data));
  },
  fetchCars: () => {
    dispatch(fetchCars());
  }
});

class CheckoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adresseCmd: "",
      pays: "",
      ville: "",
      telephoneCmd: "",
      zip: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    event.preventDefault();
    var user=jwt.decode(localStorage.getItem('jwToken'));

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);

    data.append("adresseCmd", this.state.adresseCmd);
    data.append("pays", this.state.pays);
    data.append("ville", this.state.ville);
    data.append("telephoneCmd", this.state.telephoneCmd);
    data.append("zip", this.state.zip);
    data.append("cin", user.cin);
    data.append("numVehicule", this.props.car[0].numVehicule);

    this.props.postCommand(data)
  }
  render() {
    const carModels = this.props.car;
    var user=jwt.decode(localStorage.getItem('jwToken'));
    console.log(carModels);
    if (carModels.length)
      return (
        <div>
                <CustomizedSnackbars />

          <div class="page-top-info">
            <div class="container">
              <h4>Category PAge</h4>
              <div class="site-pagination">
                <Link to="/home">Home</Link> /
                <Link to={"/model/" + this.props.car[0].nomMarque}>
                  {carModels[0].nomMarque}{" "}
                </Link>{" "}
                /
                <Link to={"/cars/" + carModels[0].nomVehicule}>
                  {carModels[0].nomVehicule}{" "}
                </Link>
              </div>
            </div>
            <hr />
            <section class="checkout-section spad">
              <div class="container">
                <div class="row">
                  <form
                    onSubmit={this.handleSubmit}
                    class="col-lg-8 order-2 order-lg-1"
                  >
                    <div>
                      <div class="checkout-form">
                        <div class="cf-title">Billing Address</div>
                        <div class="row">
                          <div class="col-md-7">
                            <p>*Billing Information</p>
                          </div>
                        </div>
                        <div class="row address-inputs">
                          <div class="col-md-12">
                            <input
                              type="text"
                              id="adresse"
                              name="adresseCmd"
                              placeholder="ADDRESS"
                              value={this.state.adresseCmd}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              id="pays"
                              name="pays"
                              placeholder="Country"
                              value={this.state.pays}
                              onChange={this.handleInputChange}
                            />{" "}
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              id="ville"
                              name="ville"
                              placeholder="Town"
                              value={this.state.ville}
                              onChange={this.handleInputChange}
                            />{" "}
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              placeholder="ZIP CODE"
                              value={this.state.zip}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div class="col-md-6">
                            <input
                              type="text"
                              id="telephone"
                              name="telephoneCmd"
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
                        {localStorage.getItem("jwToken") ? (
                          <button
                            class="site-btn submit-order-btn"
                            type="submit"
                            id="order2"
                          >
                            Place Order
                          </button>
                        ) : (
                          <button
                            class="site-btn submit-order-btn"
                            type="submit"
                            disabled
                            id="order2"
                          >
                            Please login to be able to place order
                          </button>
                        )}
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
                              src={"../../assets/images/" + carModels[0].path}
                              alt=""
                            />
                          </div>
                          {/* <h6>{carModels[0].nomVehicule}</h6>
                          <p>{carModels[0].prix}</p> */}
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
    else return <div />;
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckoutComponent)
);
