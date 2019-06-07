import React from "react";
import {  withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {fetchForum,postComment} from '../redux/ActionCreators';
class Forum extends React.Component {
constructor(props){
    super(props);
   this.state={}
}
   
    componentDidMount(){
        this.props.fetchForum();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
  render() {
    
   console.log(this.props.forum.forum[0])
   var i=0;

    const forum=this.props.forum.forum.map((forum)=> {
        var tmp="name"+forum.codePublication;
      const reponses=forum.reponses.map(rep=>{return(
        <div class="media mt-3">
      <a class="pr-2" href="#">
      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter"/>
  </a>
  <div class="media-body">
      <p class="text-muted">
          <strong>{rep.nomClient}</strong>: {rep.contenu}
      </p>
  </div>
  <br/>
  </div>
  ) })
      return(<div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2 offset-lg-3 mt-5 mb-3   ">
    <div class="card publication">
        <div class="card-body h-100">

            <div class="media">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" class="rounded-circle mr-3" alt="Kathy Davis"/>
                <div class="media-body">
                    <small class="float-right text-navy">{forum.date.substring(0,10)}</small>
                    <p class="mb-2"><strong>{forum.nomClient}</strong></p>
                    <p>{forum.publication}</p>

                    

                    

                    
                        {reponses}
                      
 
                        <div class="media mt-3">
      
                        <input type="text" onChange={(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } }  name={tmp}
                        value={this.state.name} />
      
      <button onClick={()=>this.props.postComment(forum.codePublication,this.state[tmp.toString()])}>post comment</button>
{      console.log(this.state[tmp.toString()])
}  <br/>
  </div>
                      <br/>
                </div>
            </div>

            
            
        </div>
    </div>
</div>)
})
    return (
      <div>
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
      fetchForum:()=>dispatch(fetchForum()),
      postComment:(a,b)=>dispatch(postComment(a,b))
    };
  };
export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Forum)
  );