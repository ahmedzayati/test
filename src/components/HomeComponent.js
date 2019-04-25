import React from "react";
import CarouselHome from "./client/design/CarouselComponent";
import Category from "./CategoryComponent";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
class Home extends React.Component {
  
  render() {
    const styles = theme => ({
      margin: {
        margin: theme.spacing.unit,
      },
      extendedIcon: {
        marginRight: theme.spacing.unit,
      },
    });

    return (
      <div>
        <CarouselHome />
        <Category />
        {/* <div className="row">
        <img className="col-12" height="400" src="assets/images/cover2.jpg" />
        <img className="col-12" height="400"  src="assets/images/cover.jpg" />
        </div> */}
        {/* <center className="mt-5">
          <h1>CarMaster </h1>
          <p>
            Our vehicles surround you and your passengers with a comprehensive
            bundle of advanced safety and convenience features. From cameras to
            ultrasonic sensors to radars, our sophisticated network of sensors
            acts as extra sets of eyes when you drive or park. You call it peace
            of mind. We call it Hyundai SmartSense.
          </p>
        </center> */}
        <Fab size="small" color="secondary" aria-label="Add" className={styles.margin}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}
export default Home;
