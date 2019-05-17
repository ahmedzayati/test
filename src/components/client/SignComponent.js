import React from "react";
import { withRouter } from "react-router-dom";
import {
  Breadcrumb,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";
import createBrowserHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { userSignup } from "./../../redux/ActionCreators";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const styles = {
  disabledButton: {
    backgroundColor: "gray"
  }
};
const history = createBrowserHistory({ forceRefresh: true });
class Sign extends React.Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('state')){
        const s=localStorage.getItem('state')
        this.state = {
            firstname: s.firstname,
            lastname: "",
            telnum: "",
            email: "",
            password: "",
            password2: "",
            contactType: "Tel.",
            gendre: "",
            adresse: "",
            touched: {
              firstname: false,
              lastname: false,
              telnum: false,
              email: false,
              password: false,
              adresse: false
            }
          };
    }
    else 
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      password: "",
      password2: "",
      contactType: "Tel.",
      gendre: "",
      adresse: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
        password: false,
        adresse: false
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
      [name]: value
    });
  }
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("state","ffff")
    this.props.userSignup(this.state, this.props.history);
    console.log(this.state)
  }
  validate(firstname, lastname, telnum, email, password, password2, adresse) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      password: "",
      password2: "",
      adresse: ""
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    if (this.state.touched.adresse && adresse.length < 3)
      errors.adresse = "Last Name should be >= 3 characters";
    else if (this.state.touched.adresse && adresse.length > 10)
      errors.adresse = "Last Name should be <= 10 characters";

    if (this.state.touched.password && password.length <= 5)
      errors.password = "password too week";
    else if (this.state.touched.password && password.length > 10)
      errors.password = "password <= 10 characters";

    if (this.state.touched.password2 && password2 !== password)
      errors.password2 = "passwords not matching";
    // else if (this.state.touched.password2 && password2.length > 10)
    //   errors.password2 = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";
    else if (this.state.touched.telnum && telnum.length > 8)
      errors.telnum = "Wrong tel number (more than 8 caracteres)";
    else if (this.state.touched.telnum && telnum.length < 8)
      errors.telnum = "Wrong tel number (less than 8 caracteres)";
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.touched.email && !emailRex.test(email))
      errors.email = " Email not valide ";

    return errors;
  }
  alerticon = () => {
    alert("WELCOME " + this.state.firstname + " have a nice DAY ! ");
  };

  render() {
    const { classes } = this.props;

    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email,
      this.state.password,
      this.state.password2,
      this.state.adresse
    );

    const enabled =
      errors.firstname == "" &&
      errors.lastname == "" &&
      errors.telnum == "" &&
      errors.email == "" &&
      errors.password == "" &&
      errors.password2 == "" &&
      errors.adresse == "" &&
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.telnum !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.password2 !== "" &&
      this.state.adresse !== "" &&
      this.state.gendre !== "";
    return (
      <div className="row row-content">
        <div className="col-12 col-md-8 offset-1">
          <form
            
            class="col-lg-12 order-2 offset-lg-1 order-lg-1"
          >
            <div class="cf-title">
              <center>Create your account</center>
            </div>
            <div class="row address-inputs">
              <div class="col-md-12  offset-lg-1">
                <FormGroup row>
                  <Label htmlFor="firstname" md={2}>
                    First Name
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.handleInputChange}
                      valid={errors.firstname === ""}
                      invalid={errors.firstname !== ""}
                      onBlur={this.handleBlur("firstname")}
                    />
                    <FormFeedback>{errors.firstname}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastname" md={2}>
                    Last Name
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      value={this.state.lastname}
                      valid={errors.lastname === ""}
                      invalid={errors.lastname !== ""}
                      onBlur={this.handleBlur("lastname")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.lastname}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={7}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      valid={errors.email === ""}
                      invalid={errors.email !== ""}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password" md={2}>
                    Password
                  </Label>
                  <Col md={7}>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      valid={errors.password === ""}
                      invalid={errors.password !== ""}
                      onBlur={this.handleBlur("password")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password2" md={2}>
                    Confirm Password
                  </Label>
                  <Col md={7}>
                    <Input
                      type="password"
                      id="password2"
                      name="password2"
                      placeholder="Retype password"
                      value={this.state.password2}
                      valid={errors.password2 === ""}
                      invalid={errors.password2 !== ""}
                      onBlur={this.handleBlur("password2")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password2}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="adresse" md={2}>
                    Adresse
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="adresse"
                      name="adresse"
                      placeholder="Adresse"
                      value={this.state.addresse}
                      valid={errors.adresse === ""}
                      invalid={errors.adresse !== ""}
                      onBlur={this.handleBlur("adresse")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.adresse}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="telnum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={7}>
                    <Input
                      type="tel"
                      id="telnum"
                      name="telnum"
                      placeholder="Tel. number"
                      value={this.state.telnum}
                      valid={errors.telnum === ""}
                      invalid={errors.telnum !== ""}
                      onBlur={this.handleBlur("telnum")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.telnum}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="telnum" md={2}>
                    gendre
                  </Label>
                  <Col md={{ size: 2, offset: 0 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="gendre"
                          value="Male"
                          onChange={this.handleInputChange}
                        />{" "}
                        <strong>Male</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  {/*  <Col md={{size: 3, offset: 0}}>
                             <Input type="select" name="contactType"
                                     value={this.state.contactType}
                                     onChange={this.handleInputChange}>
                                 <option>Tel.</option>
                                 <option>Email</option>
                             </Input>
                         </Col>*/}
                  <Col md={{ size: 4 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="gendre"
                          value="Female"
                          onChange={this.handleInputChange}
                        />{" "}
                        <strong>Female</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 5, offset: 3 }}>
                    <Button
                      className="site-btnlogin submit-order-btn"
                      type="submit"
                      name="submit"
                      disabled={!enabled}
                      onClick={this.handleSubmit}
                      classes={{
                        disabled: classes.disabledButton
                      }}
                    >
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Sign.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    null,
    { userSignup }
  )(withStyles(styles)(Sign))
);
