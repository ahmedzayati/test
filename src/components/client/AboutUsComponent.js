import React from "react";
import CarouselHome from "./design/CarouselComponent";
import Category from "../CategoryComponent";

class About extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-12 col-sm-5 offset-2">
          <div className="row">
            <img width="550" className="mt-5" src="assets/images/aboutUs.jpg" />
          </div>

          <div className="row">
            <h2>We make things better , we make you a car master </h2>
            <p>
              This is always our goal. And as you'll see below, it leads to some
              pretty exciting results. CarMaster has always been an innovative
              car company. One that never stops pushing for what's possible to
              enhance people's driving experiences every day.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
