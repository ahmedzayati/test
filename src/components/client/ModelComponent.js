import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";


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
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

class Model extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={150}
          cols={3}
          spacing={40}
          className={classes.gridList}
        >
          <GridListTile
            key="Subheader"
            className="list"
            cols={3}
            style={{ height: "auto" }}
          >
            <ListSubheader component="div" />
          </GridListTile>
          {this.props.cars.map(model => (
            <GridListTile key={model.nomVehicule}>
              <img width={300} src={"../assets/images/" + model.path} />

              <GridListTileBar
                title={model.nomVehicule}
                subtitle={<span>by: {model.nomMarque}</span>}
                actionIcon={
                  <IconButton>
                    <Link to={`/cars/${model.nomVehicule}`}>
                      <i class="fa fa-plus" aria-hidden="true" />
                    </Link>
                    <IconButton>
                      <i class="fa fa-buy" aria-hidden="true" />{" "}
                    </IconButton>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
          <p />
        </GridList>
      </div>

      // <div style={{ backgroundColor: "#f3f8ff" }} className=" col-4 py-3 md-8">
      //   <Card key={model.id} style={{ backgroundColor: "#deecff" }}>
      //     <CardImg top width="100%" src={"../"+model.src} alt="Card image cap" />
      //     <CardBody>
      //       <h2>
      //         {model.name} <Badge color="warning">{model.arrivage}</Badge>
      //       </h2>
      //       <CardTitle />
      //       <CardSubtitle>
      //       <span class="product-grid__price">{model.price}</span>
      //       </CardSubtitle>
      //       <CardText>{model.detail}</CardText>
      //      <center> <Link to={"/signup"}>
      //         <Button color="info">BUY NOW </Button>{" "}
      //       </Link>
      //       <Link to={`/cars/${model.id}`}>
      //       <Button color="secondary" >
      //         show more
      //       </Button>
      //       </Link>
      //       </center>
      //     </CardBody>
      //   </Card>
      // </div>
    );
  }
}
Model.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Model);
