import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

import {
  addPersonnels,
  deletePersonnels,
  pushPersonnels,
  alterPersonnels,
  fetchOrders,
  deletePersonnel,
  confirmOrder,
  declineOrder
} from "../redux/ActionCreators";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";
import MyApp from "./pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const mapStateToProps = state => {
  return {
    orders: state.orders
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
    fetchOrders: () => dispatch(fetchOrders()),
    confirmOrder: numCommande => dispatch(confirmOrder(numCommande)),
    declineOrder: numCommande => dispatch(declineOrder(numCommande))
  };
};

class OrderDetail extends React.Component {
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
    this.props.fetchOrders();
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const orders=this.props.orders.orders.map(order=>{if(parseInt( order.numCommande)===parseInt( this.props.numCommande))
        return(
            <div id="page-wrapper">
            <h1>Order Details and Summary </h1>
            
            <h2>Order Information</h2>
            
            <details>
              <summary>Order #{order.numCommande}</summary>
              
              <table>
              <tr>
                  <th scope="row">Order Owner</th>
                  <td>{order.nomClient} {order.prenomClient}</td>
                </tr>
                <tr>
                  <th scope="row">Owner Mail</th>
                  <td>
                   {order.email}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Car Name</th>
                  <td>{order.nomVehicule}</td>
                </tr>
                <tr>
                  <th scope="row">Car Mark</th>
                  <td>{order.nomMarque}</td>
                </tr>
                <tr>
                  <th scope="row">Order Date</th>
                  <td>{order.date}</td>
                </tr>
                <tr>
                  <th scope="row">Order Number</th>
                  <td>#{order.numCommande}</td>
                </tr>
                <tr>
                  <th scope="row">Shipping Address</th>
                  <td>
                    {order.adresse}
                  </td>
                </tr>
                <tr>
                  <th scope="row">ZIP Code</th>
                  <td>
                   {order.zip}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Country</th>
                  <td>
                   {order.pays}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Telephone</th>
                  <td>
                   {order.telephone}
                  </td>
                  <td>{order.numCommande}</td>
                </tr>
                
                <tr>
                  <th scope="row">Shipping Address</th>
                  <td>{order.adresse}</td>
                </tr>
                
                
              
                
              </table>
            </details>
            <h2>CHECK FILE</h2>
            <details>
              <summary>                  <a href={'../../assets/files/'+order.pathCmd} target='_blank'>UPLOADED FILE</a>
</summary>
              <ul>
                
              </ul>
            </details>
            <h2>COMFIRM ORDER</h2>
            <details>
              <summary>show options</summary>
              <ul>
                <li>
                  <Link to="/admin/orders/">
                    <button
                      onClick={() => {
                        this.props.confirmOrder(order.numCommande);
                      }}
                    >
                      <i class="fa fa-check" aria-hidden="true" />
                      confirm
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/orders/">
                    <button
                      onClick={() => {
                        this.props.declineOrder(order.numCommande);
                      }}
                    >
                      <i class="fa fa-times" aria-hidden="true" />
                      decline
                    </button>
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        );
      return null;
    });
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
            <Link to="/admin/order">
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
              <div class="card mb-3">
                {orders}

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
  )(OrderDetail)
);
