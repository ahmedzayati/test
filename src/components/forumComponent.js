import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Input from '@material-ui/core/Input';

import { fetchForum, postComment, postQuestion } from "../redux/ActionCreators";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});
class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "" };
  }

  componentDidMount() {
    this.props.fetchForum();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props.forum.forum[0]);
    var i = 0;
    var user=jwt.decode(localStorage.getItem('jwToken'));
    const { classes } = this.props;

    const forum = this.props.forum.forum.map(forum => {
      var tmp = "name" + forum.codePublication;
      const reponses = forum.reponses.map(rep => {
        return (
          <div class="media mt-3">
            <a class="pr-2" href="#">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                width="36"
                height="36"
                class="rounded-circle mr-2"
                alt="Marie Salter"
              />
            </a>
            <div class="media-body">
              <p class="text-muted">
                <strong>{rep.nomClient}</strong>: {rep.contenu}
              </p>
            </div>
            <br />
          </div>
        );
      });
      return (
        <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2 offset-lg-3 mt-5 mb-3   ">
          <div class="card publication">
            <div class="card-body h-100">
              <div class="media">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  width="56"
                  height="56"
                  class="rounded-circle mr-3"
                  alt="Kathy Davis"
                />
                <div class="media-body">
                  <small class="float-right text-navy">
                    {forum.date.substring(0, 10)}
                  </small>
                  <p class="mb-2">
                    <strong>{forum.nomClient}</strong>
                  </p>
                  <p>{forum.publication}</p>

                  {reponses}

                  <div class="media mt-3">
                    {/* <input
                      type="text"
                      onChange={e => {
                        this.setState({
                          [e.target.name]: e.target.value
                        });
                      }}
                      name={tmp}
                      value={this.state.name}
                    /> */}
<Input
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        value={this.state.name}
        onChange={e => {
          this.setState({
            [e.target.name]: e.target.value
          });
        }}
        name={tmp}
      />
                    {user ?
              
              <Button variant="contained" color="primary" className={classes.rightIcon} onClick={() =>
                this.props.postComment(
                  forum.codePublication,
                  this.state[tmp.toString()]
                )
              }>
              post comment
              
            </Button>
                :
            <Button variant="contained" color="primary" className={classes.rightIcon} 
              disabled
            >
             Please Login
            
          </Button>
            }
                    <br />
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2 offset-lg-3 mt-5 mb-3   ">
          <div class="card publication">
            <div class="card-body h-100">
              Post Question
              <div class="media">
                <div class="media-body">
                  <textarea
                    onChange={e => {
                      this.setState({
                        [e.target.name]: e.target.value
                      });
                    }}
                    name="question"
                    value={this.state.name}
                  />
                  
                </div>
              </div>
              {user ?
              
            <Button variant="contained" color="primary" onClick={() => this.props.postQuestion(this.state.question)}>
            Send
            
          </Button>
              :<Button disabled variant="contained" color="primary"
            >
              Please Login
            </Button>}
            </div>
          </div>
        </div>
        {forum}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    forum: state.forum
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchForum: () => dispatch(fetchForum()),
    postComment: (a, b) => dispatch(postComment(a, b)),
    postQuestion: a => dispatch(postQuestion(a))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Forum))
);
