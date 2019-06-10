import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { sendMessage } from "../../redux/ActionCreators";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
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
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div>
          <br /> <br /> <br />
          <section class="checkout-section spad">
            <div class="container">
              <div class="row">
                <form class="col-lg-8 order-2 offset-lg-2 order-lg-1">
                  <div>
                    <div class="checkout-form">
                      <center>
                        {" "}
                        <div class="cf-title">CONTACT US</div>
                        <br /> <br />
                      </center>
                      <div class="row address-inputs">
                        <div class="col-md-12">
                          <div class="col-md-12">
                            <textarea
                              style={{ backgroundColor: "#F0F0F6" }}
                              className="textarea"
                              type="textarea"
                              rows="5"
                              id="textarea"
                              name="message"
                              placeholder="write you message"
                              value={this.state.name}
                              onChange={this.handleInputChange}
                            />

                            {console.log(this.state)}
                          </div>
                          <div id="items" />
                        </div>
                      </div>
                      <br />
                      <div id="items" />
                      {this.props.auth.isAuthentificated ? (
                        <button
                          onClick={() =>
                            this.props.sendMessage(this.state.message)
                          }
                        >
                          {console.log(this.props.message)}
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
const mapStateToProps = state => {
  return {
    message: state.message,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => dispatch(sendMessage(message))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Contact)
);
