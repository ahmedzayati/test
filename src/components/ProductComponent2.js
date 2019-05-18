import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

import AlertDialogSlide1 from "./DialogProduct";
import AlertDialogSlide2 from "./CarUpdate";

import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {  fetchCars, deleteCar } from "../redux/ActionCreators";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 980,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});
const mapStateToProps = state => {
  console.log(state.cars);
  return {
    cars: state.cars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars()),
    ondeleteCar: id => dispatch(deleteCar(id))
  };
};

class ProductComponent2 extends React.Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;

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
                <span>Manage the product</span>
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
              <Link to="/admin/orders">
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
                        src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="img"
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

            <div className={classes.root}>
              <AlertDialogSlide1 />
              <GridList
                cellHeight={150}
                cols={3}
                spacing={30}
                className={classes.gridList}
              >
                <GridListTile
                  key="Subheader"
                  className="list"
                  cols={3}
                  style={{ height: "auto" }}
                />
                {console.log(this.props.cars)}
                {this.props.cars.cars.map(car => (
                  <GridListTile key={car.numVehicule}>
                    <img
                      width={300}
                      src={"../assets/images/" + car.path}
                      alt={car.path}
                    />

                    <GridListTileBar
                      title={car.nomVehicule}
                      subtitle={<span>by:{car.nomMarque}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <i
                            class="fa fa-trash"
                            aria-hidden="true"
                            onClick={() => {
                              this.props.ondeleteCar(car.numVehicule);
                            }}
                          />
                          <IconButton className={classes.icon}>
                            <Tooltip title="Update" className="col-2">
                              <AlertDialogSlide2 car={car} />
                            </Tooltip>
                          </IconButton>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductComponent2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ProductComponent2))
);
