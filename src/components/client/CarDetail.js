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

class CarDetail extends React.Component {
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
              <Link to={`/cars/${model.id}`}>
              <Button color="secondary" >
                show more
              </Button>
              </Link>
              </center>
            </CardBody>
          </Card>
        </div>
        
      );
    });
    return (
      <div >
        <div class="page-top-info">
          <div class="container">
		      	<h4>Category PAge</h4>
              <div class="site-pagination">
                <Link to="/home">Home</Link> /
                <Link to={"/model/"+carModels[0].categorie}>{carModels[0].categorie} </Link> /
                <Link to={"/cars/"+carModels[0].id}>{carModels[0].name} </Link>
              </div>
          </div>
      <hr />
      <hr />
	    	</div>
        <section class="product-section">
		<div class="container">
			<div class="back-link">
				<a href="./category.php"> &lt;&lt; Back to Category</a>
			</div>
			<div class="row">
				<div class="col-lg-6">
					<div class="product-pic-zoom">
						<img class="product-big-img" src={"../"+carModels[0].src} alt="45" width="100%"/>
					</div>
					<div class="product-thumbs"  style={{overflow: "hidden", outline: "none"}}>
						<div class="product-thumbs-track">
							<div class="pt active" data-imgbigurl={"../"+carModels[0].src}><img src={"../"+carModels[0].src} alt="okok"/></div>
						</div>
					</div>
				</div>
				<div class="col-lg-6 product-details">
					<h2 class="p-title">{carModels[0].name}</h2>
					<h3 class="p-price" >{carModels[0].price}</h3>
					<h4 class="p-stock">Available: <span>In Stock</span></h4>
					
					
				<Link to={`/checkout/${carModels[0].id}`}	><button class="site-btn add-to-cart" >Place an ordor </button></Link>
					<div id="accordion" class="accordion-area">
						<div class="panel">
							<div class="panel-header" id="headingOne">
								<button class="panel-link " data-toggle="collapse">information</button>
							</div>
							<div id="collapse1" class="collapse show">
								<div class="panel-body">
									<p>{carModels[0].detail} </p>
								</div>
							</div>
						</div>
            <div class="panel">
							<div class="panel-header" id="headingOne">
								<button class="panel-link " >technical sheet</button>
							</div>
							<div  >
								<div class="panel-body">
									<p>{carModels[0].detail} </p>
								</div>
							</div>
						</div>
						<div class="panel">
							<div class="panel-header" id="headingTwo">
								<button class="panel-link" >care details </button>
							</div>
							<div id="collapse2" class="collapse" >
								<div class="panel-body">
									<img src="./img/cards.png" alt=""/>
									<p> </p>
								</div>
							</div>
						</div>
						
					</div>
					<div class="social-sharing">
						<a href=""><i class="fa fa-google-plus"></i></a>
						<a href=""><i class="fa fa-pinterest"></i></a>
						<a href=""><i class="fa fa-facebook"></i></a>
						<a href=""><i class="fa fa-twitter"></i></a>
						<a href=""><i class="fa fa-youtube"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>


     </div>
    );
  }
}
export default CarDetail;
