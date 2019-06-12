import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCars } from "../../redux/ActionCreators";
const mapStateToProps = state => {
  return {
    cars: state.cars,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => ({
  fetchCars: () => {
    dispatch(fetchCars());
  }
});

class CarDetail extends React.Component {
  componentDidMount() {
    if (this.props.cars.cars.length == 0) this.props.fetchCars();
  }
  render() {
    const carModels = this.props.cars.cars.filter(
      car => car.nomVehicule == this.props.nomVehicule
    );

    console.log(this.props.nomVehicule);
    console.log(carModels);

    if (carModels.length)
      return (
        <div>
          <div class="page-top-info">
            <div class="container">
              <h4>Category PAge</h4>
              <div class="site-pagination">
                <Link to="/home">Home</Link> /
                <Link to={"/model/" + carModels[0].nomMarque}>
                  {carModels[0].nomMarque}{" "}
                </Link>{" "}
                /
                <Link to={"/cars/" + carModels[0].nomVehicule}>
                  {carModels[0].nomVehicule}
                </Link>
              </div>
            </div>
            <hr />
            <hr />
          </div>
          <section class="product-section">
            <div class="container">
              <div class="back-link">
                <Link to={"/model/" + carModels[0].nomMarque}>
                  <a> &lt;&lt; Back to Category</a>
                </Link>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="product-pic-zoom">
                    <img
                      class="product-big-img"
                      src={"../../assets/images/" + carModels[0].path}
                      alt="45"
                      width="100%"
                    />
                  </div>
                  <div
                    class="product-thumbs"
                    style={{ overflow: "hidden", outline: "none" }}
                  >
                    <div class="product-thumbs-track">
                      <div
                        class="pt active"
                        data-imgbigurl={
                          "../../assets/images/" + carModels[0].path
                        }
                      >
                        <img
                          src={"../../assets/images/" + carModels[0].path}
                          alt="okok"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 product-details">
                  <h2 class="p-title">{carModels[0].nomVehicule}</h2>
                  <h3 class="p-price">{carModels[0].prix} $</h3>
                  <h4 class="p-stock">
                    Available: <span>In Stock</span>
                  </h4>

                  <Link to={`/checkout/${carModels[0].nomVehicule}`}>
                    <button class="site-btn add-to-cart">
                      Place an ordor{" "}
                    </button>
                  </Link>
                  <div id="accordion" class="accordion-area">
                    <div class="panel">
                      <div class="panel-header" id="headingOne">
                        <button class="panel-link " data-toggle="collapse">
                          information
                        </button>
                      </div>
                      <div id="collapse1" class="collapse show">
                        <div class="panel-body">
                          <p>{carModels[0].description} </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <div class="panel-header" id="headingOne">
                        <button class="panel-link ">technical sheet</button>
                      </div>
                      <div>
                        <div class="panel-body">
                          <p>{carModels[0].description} </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <div class="panel-header" id="headingTwo">
                        <button class="panel-link">care details </button>
                      </div>
                      <div id="collapse2" class="collapse">
                        <div class="panel-body">
                          <img src="./img/cards.png" alt="" />
                          <p> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="social-sharing">
                    <a href="">
                      <i class="fa fa-google-plus" />
                    </a>
                    <a href="">
                      <i class="fa fa-pinterest" />
                    </a>
                    <a href="">
                      <i class="fa fa-facebook" />
                    </a>
                    <a href="">
                      <i class="fa fa-twitter" />
                    </a>
                    <a href="">
                      <i class="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    else return <div />;
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CarDetail)
);
