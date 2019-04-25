import React from "react";
import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Badge
} from "reactstrap";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
      <div className="row row-content">
        <div className="col-6 offset-3">
          <h3>contact us</h3>
        </div>
        <div className="col-12 col-md-8 offset-3">
          <Form onSubmit={this.handleSubmit}>
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
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Message
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  id="textarea"
                  name="textarea"
                  placeholder="write you message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 4, offset: 2 }}>
                <Button className="col-md-12" type="submit" color="success">
                  send message
                </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="mt-2">
                <Link to="/signup">
                  <h3>you haven't an account??</h3>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default Contact;
