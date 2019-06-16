import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import jwt from "jsonwebtoken";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/ActionCreators";
import { NavLink, Link } from "react-router-dom";
import React from "react";
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
// const mapDispatchToProps = dispatch => (  {
//   addPersonnels: () => {
//     dispatch(addPersonnels());
//   },
//   deletePersonnels: () => {
//     dispatch(deletePersonnels());
//   }

// });
const mapDispatchToProps = dispatch => {
  return { logout: h => dispatch(logout(h)) };
};
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  //   toggleModal() {
  //     this.setState({
  //       isModalOpen: !this.state.isModalOpen
  //     });
  //   }
  logout = e => {
    e.preventDefault();
    this.props.logout(this.props.history);
  };

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    var user=jwt.decode(localStorage.getItem('jwToken'));
    if(user){
      if(user.grade!=="1"){
      return (
        <div>
          <Navbar dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <Link className="nav-link" to="/home">
                {" "}
                <NavbarBrand className="mr-auto">
                  <img
                    src="assets/images/logo.png"
                    height="30"
                    width="41"
                    alt="CarMaster"
                  />
                </NavbarBrand>
              </Link>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-5">
                  <NavItem>
                    <Link className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg" /> Home
                    </Link>
                  </NavItem>
                 
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <span className="fa fa-envelope fa-lg" /> Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      <span className="fa fa-address-card fa-lg" /> About Us
                    </NavLink>
                  </NavItem>
                </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/account">
                        {" "}
                        <Button className="btn-login" outline>
                          <span className="fa fa-bars  fa-lg" /> My Account
                        </Button>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login">
                        {" "}
                        <Button
                          className="btn-login"
                          onClick={this.logout}
                          outline
                        >
                          <span className="fa fa-sign-in fa-lg" /> LogOut
                        </Button>
                      </Link>
                    </NavItem>
                  </Nav>
              
              </Collapse>
            </div>
          </Navbar>
          {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <p>If you don't have an account <Link onClick={this.toggleNav}  to='/signup'>SIGNUP</Link>  </p>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>  */}
        </div>
      );}else return(<div></div>)
    }
    else{
      return (
        <div>
          <Navbar dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <Link className="nav-link" to="/home">
                {" "}
                <NavbarBrand className="mr-auto">
                  <img
                    src="assets/images/logo.png"
                    height="30"
                    width="41"
                    alt="CarMaster"
                  />
                </NavbarBrand>
              </Link>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-5">
                  <NavItem>
                    <Link className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg" /> Home
                    </Link>
                  </NavItem>
                 
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <span className="fa fa-envelope fa-lg" /> Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      <span className="fa fa-address-card fa-lg" /> About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/forum">
                      <span className="fa fa-address-card fa-lg" /> Forum
                    </NavLink>
                  </NavItem>
                </Nav>
                
                  {/* <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/account">
                        {" "}
                        <Button className="btn-login" outline>
                          <span className="fa fa-bars  fa-lg" /> My Account
                        </Button>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login">
                        {" "}
                        <Button
                          className="btn-login"
                          onClick={this.logout}
                          outline
                        >
                          <span className="fa fa-sign-in fa-lg" /> LogOut
                        </Button>
                      </Link>
                    </NavItem>
                  </Nav> */}
                
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/login">
                        {" "}
                        <Button
                          className="btn-login"
                          onClick={this.toggleModal}
                          outline
                        >
                          <span className="fa fa-sign-in fa-lg" /> Login
                        </Button>
                      </Link>
                    </NavItem>
                  </Nav>
                )}
              </Collapse>
            </div>
          </Navbar>
          
        </div>
      );
    }
   
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
