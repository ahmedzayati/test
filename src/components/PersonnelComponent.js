import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  addPersonnels,
  deletePersonnels,
  pushPersonnels,
  alterPersonnels,
  fetchPersonnels
} from "../redux/ActionCreators";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {  withRouter } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    personnels: state.personnels
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
  return {
    ondeletePersonnels: id => dispatch(deletePersonnels(id)),
    onPushPersonnels: (code, pseudo) => dispatch(pushPersonnels(code, pseudo)),
    onAlterPersonnels: (id, salary, position) =>
      dispatch(alterPersonnels(id, salary, position)),
    fetchPersonnels: () => dispatch(fetchPersonnels())
  };
};

class Personnel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "", pseudo: "" };
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
  componentDidMount() {
    this.props.fetchPersonnels();
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {" "}
          <Link to="/admin" style={{ color: "white" }}>
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">Admin</div>
            </a>
          </Link>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>manage the staff</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <Link to="/admin/product">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench" />
                <span>Products</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench" />

                <span>Staff</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench" />

                <span>Clients</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-comments" />

                <span>Messages</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-list" />

                <span>Tasks</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-shopping-cart" />

                <span>Orders</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/chart">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-chart-area" />

                <span>Charts</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-chart-area" />

                <span>statistics</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/personnel">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i class="fas fa-fw fa-dollar" />

                <span>founds</span>
              </a>
            </Link>
          </li>
          <hr className="sidebar-divider" />
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars" />
              </button>

              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw" />
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw" />
                  </a>
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 12, 2019
                        </div>
                        <span className="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>

                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-envelope fa-fw" />
                  </a>{" "}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">Message Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                          alt=""
                        />
                        <div className="status-indicator bg-success" />
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div className="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </a>

                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Read More Messages
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block" />
                <li className="nav-item dropdown no-arrow">
                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      <span className="mr-2 d-none d-lg-inline" />
                      Admin{" "}
                      <img
                        className="mg-profile rounded-circle ml-1"
                        src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                      />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <NavLink to="/category">
                        <DropdownItem>Profile</DropdownItem>
                      </NavLink>
                      <NavLink to="/category">
                        <DropdownItem>Settings</DropdownItem>
                      </NavLink>
                      <NavLink to="/category">
                        <DropdownItem>Logout</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3  text-gray-800">manage the staff</h1>
              </div>
              <div class="card mb-3">
                <div class="card-header m-3">
                  <h2>
                    <i class="fas fa-table m-3" />
                    Data Table STAFF
                  </h2>
                </div>

                <div>
                  <button
                    class="fas fa-plus card-header m-3 btn-lg"
                    id="toggler"
                  />
                  <UncontrolledCollapse toggler="#toggler">
                    <Card class=" m-2">
                      <CardBody class=" m-2">
                        <div class="card-header m-2">ADD NEW STAFF</div>
                        <div class="card-body ">
                          <form>
                            <div class="form-group">
                              <div class="form-label-group">
                                <label for="inputEmail">Pseudo</label>
                                <input
                                  type="text"
                                  id="inputEmail"
                                  class="form-control"
                                  placeholder="Pseudo"
                                  required="required"
                                  autofocus="autofocus"
                                  name="pseudo"
                                  onChange={this.handleInputChange}
                                  value={this.state.pseudo}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="form-label-group">
                                <label for="inputPassword">CODE</label>

                                <input
                                  type="text"
                                  id="inputCode"
                                  class="form-control"
                                  placeholder="Code"
                                  name="code"
                                  required="required"
                                  onChange={this.handleInputChange}
                                  value={this.state.code}
                                />
                              </div>
                            </div>

                            <Button
                              onClick={() =>
                                this.props.onPushPersonnels(
                                  this.state.code,
                                  this.state.pseudo
                                )
                              }
                              className="btn btn-primary "
                            >
                              ADD
                            </Button>
                          </form>
                        </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Email</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.props.personnels.personnels.map(personnel => (
                          <tr key={personnel.id}>
                            <td>{personnel.nomPersonnel}</td>
                            <td>{personnel.Position}</td>
                            <td>{personnel.email}</td>
                            <td>{personnel.dateEmbauche}</td>
                            <td>{personnel.Salary}</td>
                            <td>
                              <a
                                class="fas fa-trash m-0 icon-circle  "
                                onClick={() => {
                                  this.props.ondeletePersonnels(personnel.cin);
                                }}
                              />
                            </td>
                            <td>
                              <a
                                class="fas fa-edit m-0 icon-circle "
                                id={"a" + personnel.id}
                              />
                            </td>
                            <UncontrolledCollapse toggler={"#a" + personnel.id}>
                              <Card class=" m-10">
                                <td>
                                  <form>
                                    <div class="form-group">
                                      <div class="form-label-group">
                                        <label for="sal">Salary</label>
                                        <input
                                          type="number"
                                          id={"sal" + personnel.id}
                                          class="form-control"
                                          placeholder="NEW salaary"
                                          required="required"
                                          autofocus="autofocus"
                                        />
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <div class="form-label-group">
                                        <label for="pos">Position</label>

                                        <input
                                          type="text"
                                          id={"pos" + personnel.id}
                                          class="form-control"
                                          placeholder="NEW Position"
                                          required="required"
                                        />
                                      </div>
                                    </div>

                                    <Button
                                      onClick={() =>
                                        this.props.onAlterPersonnels(
                                          personnel.id,
                                          document.getElementById(
                                            "sal" + personnel.id
                                          ).value,
                                          document.getElementById(
                                            "pos" + personnel.id
                                          ).value
                                        )
                                      }
                                      className="btn btn-primary "
                                    >
                                      ALTER
                                    </Button>
                                  </form>
                                </td>
                              </Card>
                            </UncontrolledCollapse>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Personnel)
);
