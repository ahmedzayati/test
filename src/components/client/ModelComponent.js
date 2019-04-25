import React from "react";
import { Link } from "react-router-dom";
import {CARS} from '../../shared/cars';
import {
  Badge,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const carModels =this.props.cars;
    const allmodels = carModels.map(model => {
      return (
        <div style={{ backgroundColor: "#f3f8ff" }} className=" col-4 py-3 md-8">
          <Card key={model.id} style={{ backgroundColor: "#deecff" }}>
            <CardImg top width="100%" src={"../"+model.src} alt="Card image cap" />
            <CardBody>
              <h2>
                {model.name} <Badge color="warning">{model.arrivage}</Badge>
              </h2>
              <CardTitle />
              <CardSubtitle>
              <span class="product-grid__price">{model.price}</span>
              </CardSubtitle>
              <CardText>{model.detail}</CardText>
             <center> <Link to={"/signup"}>
                <Button color="info">BUY NOW </Button>{" "}
              </Link>
              <Button color="secondary" onClick={this.toggle}>
                show more
              </Button>
              </center>
            </CardBody>
          </Card>
        </div>
        
      );
    });
    return (
      <div >
        <center>
          <img className="m-2" height="250" width="300" src={"../assets/images/"+this.props.cathegory+".png"} />
        </center>
        <div className="col-12 col-sm-10 offset-1">
          <div className="row">{allmodels}</div>
        </div>
      </div>
    );
  }
}
export default Model;
