import React from "react";
import { NavLink, Link } from "react-router-dom";
import { addPersonnels, deletePersonnels } from "../redux/ActionCreators";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { connect } from "react-redux";

class Product extends React.Component {
  render() {
    const cathegories = [
      {
        id: 1,
        src: "../assets/images/bmw.png",
        cath: "bmw"
      },
      {
        id: 2,
        src: "../assets/images/audi.png"
      },
      {
        id: 3,
        src: "../assets/images/alpha.png"
      },
      {
        id: 4,
        src: "../assets/images/mercedes.png"
      },
      {
        id: 5,
        src: "../assets/images/mazda.png"
      },
      {
        id: 6,
        src: "../assets/images/porche.png"
      },
      {
        id: 7,
        src: "../assets/images/peugeot.png"
      },
      {
        id: 8,
        src: "../assets/images/betly.png"
      },
      {
        id: 9,
        src: "../assets/images/bugati.png"
      },
      {
        id: 10,
        src: "../assets/images/rolls.png"
      },
      {
        id: 11,
        src: "../assets/images/renault.png"
      },
      {
        id: 12,
        src: "../assets/images/citroen.png"
      },
      {
        id: 13,
        src: "../assets/images/chevrolet.png"
      },
      {
        id: 14,
        src: "../assets/images/kia.png"
      },
      {
        id: 15,
        src: "../assets/images/ford.png"
      },
      {
        id: 16,
        src: "../assets/images/ferrari.png"
      },
      {
        id: 17,
        src: "../assets/images/fiat.png"
      },
      {
        id: 18,
        src: "../assets/images/jaguar.png"
      },
      {
        id: 19,
        src: "../assets/images/jeep.png"
      },
      {
        id: 20,
        src: "../assets/images/lamboguini.png"
      },
      {
        id: 21,
        src: "../assets/images/rover.png"
      },
      {
        id: 22,
        src: "../assets/images/vols.png"
      },
      {
        id: 23,
        src: "../assets/images/volvo.png"
      },
      {
        id: 24,
        src: "../assets/images/mustang.png"
      }
    ];
    const allCath = cathegories.map(cathegory => {
      return (
        <div className="col-5 col-sm-2 mt-4 " cath={cathegory.cath}>
          <Link to={`/model/${cathegory.cath}`}>
            <img
              key={cathegory.id}
              src={cathegory.src}
              alt="ghjkl"
              height="100"
              width="120"
            />
          </Link>
        </div>
      );
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
                <h1 className="h3  text-gray-800">manage the products</h1>
              </div>
              <div class="card mb-3">
                <div class="card-header m-3">
                  <h2>
                    <i class="fas fa-table m-3" />
                    Data Table BRUNDS
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
                        <div class="card-header m-2">ADD NEW brand</div>
                        <div class="card-body ">
                          <form>
                            <div class="form-group">
                              <div class="form-label-group">
                                <label for="inputEmail">Name brand</label>
                                <input
                                  type="email"
                                  id="inputEmail"
                                  class="form-control"
                                  placeholder="Email address"
                                  required="required"
                                  autofocus="autofocus"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="form-label-group">
                                <label for="inputPassword">code brand</label>

                                <input
                                  type="password"
                                  id="inputPassword"
                                  class="form-control"
                                  placeholder="Password"
                                  required="required"
                                />
                              </div>
                            </div>

                            <a class="btn btn-primary ">ADD</a>
                          </form>
                        </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div className="row mb-10">
                  <div className="col-12 col-sm-8 offset-2">
                    <div className="row">{allCath}</div>
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
export default Product;
