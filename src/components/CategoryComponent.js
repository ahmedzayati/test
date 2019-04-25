import React from "react";
import { Link } from "react-router-dom";
import Bmw from "./client/ModelComponent";

class Category extends React.Component {
  render() {
    const cathegories = [
      {
        id: 1,
        src: "assets/images/bmw.png",
        cath: "bmw"
      },
      {
        id: 2,
        src: "assets/images/audi.png"
      },
      {
        id: 3,
        src: "assets/images/alpha.png"
      },
      {
        id: 4,
        src: "assets/images/mercedes.png"
      },
      {
        id: 5,
        src: "assets/images/mazda.png"
      },
      {
        id: 6,
        src: "assets/images/porche.png"
      },
      {
        id: 7,
        src: "assets/images/peugeot.png"
      },
      {
        id: 8,
        src: "assets/images/betly.png"
      },
      {
        id: 9,
        src: "assets/images/bugati.png"
      },
      {
        id: 10,
        src: "assets/images/rolls.png"
      },
      {
        id: 11,
        src: "assets/images/renault.png"
      },
      {
        id: 12,
        src: "assets/images/citroen.png"
      },
      {
        id: 13,
        src: "assets/images/chevrolet.png"
      },
      {
        id: 14,
        src: "assets/images/kia.png"
      },
      {
        id: 15,
        src: "assets/images/ford.png"
      },
      {
        id: 16,
        src: "assets/images/ferrari.png"
      },
      {
        id: 17,
        src: "assets/images/fiat.png"
      },
      {
        id: 18,
        src: "assets/images/jaguar.png"
      },
      {
        id: 19,
        src: "assets/images/jeep.png"
      },
      {
        id: 20,
        src: "assets/images/lamboguini.png"
      },
      {
        id: 21,
        src: "assets/images/rover.png"
      },
      {
        id: 22,
        src: "assets/images/vols.png"
      },
      {
        id: 23,
        src: "assets/images/volvo.png"
      },
      {
        id: 24,
        src: "assets/images/mustang.png"
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
      <>
        <center>
          <h1 className="mt-5">OUR BRAND NEW CARS </h1>
        </center>
        <center>
          <h3>Make your choice</h3>
        </center>
        <div className="row mb-5">
          <div className="col-12 col-sm-8 offset-2">
            <div className="row">{allCath}</div>
          </div>
        </div>
      </>
    );
  }
}
export default Category;
