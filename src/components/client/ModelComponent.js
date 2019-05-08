import React from "react";
import { Link } from "react-router-dom";
import { CARS } from "../../shared/cars";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";

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
    height: 1000
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
          cellHeight={180}
          cols={3}
          spacing={30}
          className={classes.gridList}
        >
          <GridListTile className="list" cols={3} style={{ height: "auto" }}>
            <ListSubheader component="div" />
          </GridListTile>
          {this.props.cars.cars.map(model => (
            <GridListTile key={model.id}>
              <img width={300} src={"../assets/images/" + model.path} />

              <GridListTileBar
                title={model.name}
                subtitle={<span>by: {model.immatriculation}</span>}
                actionIcon={
                  <IconButton>
                    <Link to={`/cars/${model.numArticle}`}>
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
const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Model)));

// export default withRouter(connect(mapStateToProps)(Model));
