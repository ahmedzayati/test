import React from "react";
import HeaderHeader from "./AdminHeader";
import Footer from "./client/Footer";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Sign from "./client/SignComponent";
import Login from "./LoginComponent";
import Model from "./client/ModelComponent";
import About from "./client/AboutUsComponent";
import Contact from "./client/ContactUsComponent";
import Category from "./CategoryComponent";
import Account from './AccountComponent';
import EnhancedTable from "./TableComponent";
import { connect } from "react-redux";
import {
  fetchOrders,
  userSignup,
  login,
  loginAdmin,
  deletePersonnel,
  fetchCars
} from "../redux/ActionCreators";
import Order from "./OrderComponent";
import OrderDetail from "./orderDetailComponent";

import Header from "./Header";
import Admin from "./AdminComponent";
import LoginAdmin from "./LoginAdminComponent";
import Personnel from "./PersonnelComponent2";
import Product from "./ProductComponent2";
import Chart from "./ChartComponent";
import CarDetail from "./client/CarDetail";
import CheckoutComponent from "./CheckoutComponent";
const mapStateToProps = state => {
  return {
    cars: state.cars,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => ({
  fetchCars: () => {
    dispatch(fetchCars());
  },
  userSignup: user => {
    dispatch(userSignup(user));
  },
  login: data => {
    dispatch(login(data));
  },
  loginAdmin: data => {
    dispatch(loginAdmin(data));
  },
  deletePersonnel: id => dispatch(deletePersonnel(id)),
  fetchOrders: () => dispatch(fetchOrders())
});
class Main extends React.Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  render() {
    const ModelWithCath = ({ match }) => {
      return (
        <Model
          cars={this.props.cars.cars.filter(
            car => car.nomMarque === match.params.cath
          )}
          nomMarque={match.params.nomMarque}
        />
      );
    };
    const ModelWithCars = ({ match }) => {
      {
        console.log(match.params.car);
      }

      return (
        <CarDetail
          cars={this.props.cars.cars.filter(
            car => car.nomVehicule === match.params.car
          )}
        />
      );
    };
    const CheckoutComponentCar = ({ match }) => {
      return (
        <CheckoutComponent
          car={this.props.cars.cars.filter(
            car => car.nomVehicule === match.params.car
          )}
        />
      );
    };
    return (
      <div>
        <Header
          isAuthetificated={this.props.auth.isAuthetificated}
          grade={this.props.auth.grade}
          user={this.props.auth.user}
        />
        <Switch>
          <Route path="/admin/chart" component={() => <Chart />} />

          <Route path="/admin/product" component={() => <Product />} />
          <Route path="/admin/personnel" component={() => <Personnel />} />
          <Route path="/admin/orders" component={() => <Order  />} />
          <Route path="/admin/order/:numCom" component={({ match })=><OrderDetail numCommande={ match.params.numCom
          } />} />

          <Route path="/home" component={() => <Home />} />
          <Route path="/signup" component={() => <Sign />} />
          <Route
            path="/login"
            component={() => <Login />}
          />
          <Route path="/model/:cath" component={ModelWithCath} />
          <Route path="/cars/:car" component={ModelWithCars} />
          <Route path="/checkout/:car" component={CheckoutComponentCar} />

          <Route
            path="/model"
            component={() => <Model cars={this.props.cars} />}
          />
          <Route
            path="/cars"
            component={() => <CarDetail cars={this.props.cars} />}
          />
          <Route
            path="/loginAdmin"
            component={() => <LoginAdmin loginAdmin={this.props.loginAdmin} />}
          />
          <Route
            path="/account"
            component={Account }
          />
          <Route path="/admin" component={() => <Admin />} />
          <Route path="/table" component={() => <EnhancedTable />} />

          <Route path="/aboutus" component={() => <About />} />
          <Route path="/contactus" component={() => <Contact />} />
          <Route path="/category" component={() => <Category />} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
