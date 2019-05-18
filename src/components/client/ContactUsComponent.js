import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
const mapStateToProps = state => {
  return {
    cars: state.cars,
    auth: state.auth
  };
};
class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "",
      touched: {
        message: false,
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
      [name]: value
    });
  }
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div>
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
                        <div class="cf-title">CONTACT US</div>
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

                          <div class="col-md-12">
                            <Input
                              style={{ backgroundColor: "#F0F0F6" }}
                              className="textarea"
                              type="textarea"
                              rows="5"
                              id="textarea"
                              name="textarea"
                              placeholder="write you message"
                              value={this.state.message}
                              onBlur={this.handleBlur("message")}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div id="items" />
                        </div>
                      </div>
                      <br /> <br />
                      <div id="items" />
                      {this.props.auth.isAuthentificated ? (
                        <button
                          onClick={this.handleSubmit}
                          color="success"
                          className="site-btnlogin submit-order-btn-sm"
                          // disabled={!enabled}
                        >
                          Sent
                        </button>
                      ) : (
                        <Link to="/signup">
                          {" "}
                          <button
                            className="site-btnlogin submit-order-btn-sm"
                            color="primary"
                          >
                            Sign Up ,If you haven't an account
                          </button>
                        </Link>
                      )}
                    </div>
                    <br /> <br /> <br /> <br />
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
export default withRouter(connect(mapStateToProps)(Contact));
