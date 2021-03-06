import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { login } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { fetchClients } from "../redux/ActionCreators";
import { FormFeedback } from "reactstrap";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";
import { isNull, isUndefined } from "util";
const mapStateToProps = state => {
  return {
    orders: state.orders,
    clients: state.clients,
    auth:state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user, h) => dispatch(login(user, h)),
    fetchClients: () => dispatch(fetchClients())
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      email: "",
      password: "",
      errors:this.props.auth.errors.error,
      touched: {
        password: false,
        email: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,error:'',errors:''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  }
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  // validate(email, password) {

  //     const errors = {
  //         password: '',
  //         email: ''
  //     };

  //     if (this.state.touched.em && firstname.length < 3)
  //         errors.firstname = 'First Name should be >= 3 characters';
  //     else if (this.state.touched.firstname && firstname.length > 10)
  //         errors.firstname = 'First Name should be <= 10 characters';

  //     if (this.state.touched.lastname && lastname.length < 3)
  //         errors.lastname = 'Last Name should be >= 3 characters';
  //     else if (this.state.touched.lastname && lastname.length > 10)
  //         errors.lastname = 'Last Name should be <= 10 characters';

  //     const reg = /^\d+$/;
  //     if (this.state.touched.telnum && !reg.test(telnum))
  //         errors.telnum = 'Tel. Number should contain only numbers';

  //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
  //         errors.email = 'Email should contain a @';

  //     return errors;
  // }

  // alerticon = () => {
  //   const list = this.props.clients.clients;
  //   const resultat = list.find(client => client.email === this.state.email);
  //   console.log(this.state.password);
  //   if (isUndefined(resultat)) alert("NOT A VALIDE EMAIL ! ");
  // };
  componentDidMount() {
    this.props.fetchClients();
  }
  validate() {
    let error = "";
    const list = this.props.clients.clients;
    const resultat = list.find(client => client.email === this.state.email);
    if (isUndefined(resultat))
      error = "please check again email or password incorrect ";
    this.setState({ error });
    console.log(error);
  }

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
                        <div class="cf-title">Login Form</div>
                      </center>
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
                        <span className="help-block" style={{ color: "red" ,marginLeft:20}}>
                          {this.state.error}
                        </span>{" "}
                        <span className="help-block" style={{ color: "red" ,marginLeft:20}}>
                      {this.state.errors}
                    </span>
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
                      <Link to="/signup">
                        {" "}
                        <button
                          class="site-btnlogin submit-order-btn-sm"
                          color="primary"
                        >
                          Sign Up ,If you haven't an account
                        </button>
                      </Link>
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
  )(Login)
);
