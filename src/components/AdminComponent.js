import React from "react";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import { NavLink, Link } from "react-router-dom";
import Category from "./CategoryComponent";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { logout, fetchCars, deleteCar } from "../redux/ActionCreators";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1100,
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

class Admin extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout(this.props.history);
  };
  componentDidMount(){
    if(this.props.auth.grade!=="1")
      this.props.history.push('/home')
  }
  render() {
    const { classes } = this.props;
    const data = [
      {
        name: "bmw",
        sold: 200,
        pv: 2400,
        amt: 2400
      },
      {
        name: "fiat",
        sold: 310,
        pv: 2400,
        amt: 2400
      },
      {
        name: "kia",
        sold: 350,
        pv: 2400,
        amt: 2400
      },
      {
        name: "ford",
        sold: 190,
        pv: 2400,
        amt: 2400
      },
      {
        name: "mazda",
        sold: 300,
        pv: 2400,
        amt: 2400
      },
      {
        name: "porche",
        sold: 100,
        pv: 2400,
        amt: 2400
      },
      {
        name: "rolls",
        sold: 150,
        pv: 2400,
        amt: 2400
      },
      {
        name: "betly",
        sold: 170,
        pv: 2400,
        amt: 2400
      },
      {
        name: "audi",
        sold: 400,
        pv: 2400,
        amt: 2400
      }
    ];

    return (
      <div id="wrapper">
        <div className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion fixed-nav-bar">
          <ul class="nav navbar-top-links navbar-right">
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
              <a className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
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
              <Link to="/admin/clients">
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
              <Link to="/admin/orders">
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
              <Link to="/admin/message">
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
        </div>

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
                      <NavLink onClick={this.logout} to="">
                        <DropdownItem>Logout</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </nav>
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              <div className="row">
                <div className="col-12">
                  <div class="row">
                    <div class="col-xl-3 col-sm-6 mb-3">
                      <div
                        class="card text-white o-hidden h-100"
                        style={{ backgroundColor: "#00b0ff" }}
                      >
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fas fa-fw fa-comments" />
                          </div>
                          <div class="mr-5">check Messages</div>
                        </div>
                        <a
                          class="card-footer text-white clearfix small z-1"
                          href="#"
                        >
                          <span class="float-left">View Details</span>
                          <span class="float-right">
                            <i class="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                      <div
                        class="card text-white o-hidden h-100"
                        style={{
                          backgroundColor: "#03a9f4"
                        }}
                      >
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fas fa-fw fa-list" />
                          </div>
                          <div class="mr-5">check Orders</div>
                        </div>
                        <a
                          class="card-footer text-white clearfix small z-1"
                          href="#"
                        >
                          <span class="float-left">View Details</span>
                          <span class="float-right">
                            <i class="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                      <div
                        class="card text-white  o-hidden h-100"
                        style={{ backgroundColor: "#00bcd4" }}
                      >
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart" />
                          </div>
                          <div class="mr-5">check Cars</div>
                        </div>
                        <a
                          class="card-footer text-white clearfix small z-1"
                          href="#"
                        >
                          <span class="float-left">View Details</span>
                          <span class="float-right">
                            <i class="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 mb-3">
                      <div
                        class="card text-white  o-hidden h-100"
                        style={{ backgroundColor: "#4db6ac" }}
                      >
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fas fa-fw fa-life-ring" />
                          </div>
                          <div class="mr-5">check Statistics</div>
                        </div>
                        <a
                          class="card-footer text-white clearfix small z-1"
                          href="#"
                        >
                          <span class="float-left">View Details</span>
                          <span class="float-right">
                            <i class="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <br />
              <div class="card mb-2">
                <div className={classes.root}>
                  <GridList
                    cellHeight={160}
                    className={classes.gridList}
                    cols={4}
                  >
                    {this.props.cars.cars.map(tile => (
                      <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img
                          src={"../../assets/images/" + tile.path}
                          alt={tile.title}
                        />
                        <GridListTileBar
                          title={tile.nomVehicule}
                          classes={{
                            root: classes.titleBar,
                            title: classes.title
                          }}
                          actionIcon={
                            <IconButton>
                              <StarBorderIcon className={classes.title} />
                            </IconButton>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </div>
              <br />
              <br />
              <BarChart width={1000} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                />
                <Legend
                  width={100}
                  wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px"
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar
                  type="monotone"
                  dataKey="sold"
                  fill="#8884d8"
                  barSize={30}
                />
              </BarChart>
              <div class="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>

          {/* <div className="container-fluid"> */}
          {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  console.log(state.cars);
  return {
    cars: state.cars,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars()),
    ondeleteCar: id => dispatch(deleteCar(id)),
    logout: h => dispatch(logout(h))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Admin))
);
