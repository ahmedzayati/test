import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchPersonnels } from "../redux/ActionCreators";
import { isNull, isUndefined } from "util";

import { connect } from "react-redux";
import { loginAdmin } from "./../redux/ActionCreators";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
const mapStateToProps = state => {
  return {
    orders: state.orders,
    personnels: state.personnels
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: (user, h) => dispatch(loginAdmin(user, h)),
    fetchPersonnels: () => dispatch(fetchPersonnels())
  };
};
class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
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
    this.props.loginAdmin(this.state, this.props.history);
  }
  componentDidMount() {
    this.props.fetchPersonnels();
  }
  validate() {
    let error = "";
    const list = this.props.personnels.personnels;
    const resultat = list.find(per => per.email === this.state.email);
    if (isUndefined(resultat))
      error = "please check again email or password incorrect ";
    this.setState({ error });
    console.log(error);
  }
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          {/* <h3>Create your account</h3>
            </div>
             <div className="col-11 col-md-8 offset-md-3">
                 <Form onSubmit={this.handleSubmit} >
                     <FormGroup row>
                         <Label htmlFor="email" md={2}>Email</Label>
                         <Col md={7} className="inputField" >
                             <Input type="email" id="email" name="email" className="inputField" 
                                 placeholder="Email"
                                 value={this.state.email}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="password" md={2}>Password</Label>
                         <Col md={7} >
                             <Input type="password" id="password" name="password" className="inputField"
                                 placeholder="Password"
                                 value={this.state.password}
                                 onChange={this.handleInputChange} />
                         </Col>                        
                     </FormGroup>
                     
                     
                     <FormGroup row>
                         <Col md={{size: 7, offset: 2}}>
                             <Button className="col-md-12" type="submit" color="primary">
                                 Submit
                             </Button>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     <Col className="mt-2" md={{size: 3, offset: 3}}>
                        <h6>If you haven't an account</h6>
                     </Col>
                         <Col md={{size: 2, offset: 0}}>
                         
                             <Link to='/signup'> <Button className="col-md-12"  color="primary">
                                 Sign Up
                             </Button>
                             </Link>
                         </Col>
                     </FormGroup>
                 </Form> */}
          <br /> <br /> <br /> <br />
          <section class="checkout-section spad">
            <div class="container">
              <div class="row">
                <form
                  onSubmit={this.handleSubmit}
                  class="col-lg-8 order-2 offset-lg-2 order-lg-1"
                >
                  <div>
                    <div class="checkout-form">
                      <center>
                        {" "}
                        <div class="cf-title">Admin Login Form</div>
                      </center>{" "}
                      <div class="row address-inputs">
                        <div class="col-md-12">
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onBlur={this.handleBlur("email")}
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div class="col-md-12">
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            className="inputField"
                            placeholder="Password"
                            minLength="3"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />{" "}
                        </div>
                        <span className="help-block" style={{ color: "red" }}>
                          {this.state.error}
                        </span>{" "}
                      </div>
                      <div id="items" />
                      <button
                        class="site-btnlogin submit-order-btn-sm"
                        type="submit"
                        id="order2"
                        onClick={() => {
                          this.validate();
                        }}
                      >
                        Login
                      </button>
                      <br /> <br /> <br /> <br />
                    </div>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginAdmin)
);
