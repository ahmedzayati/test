import React from 'react';
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import { withRouter ,Redirect} from "react-router-dom";
import {fetchOrdersByCliens} from './../redux/ActionCreators';
import FormDialog from './OederClientModel';
const mapStateToProps = state => {
    return {
      cars: state.cars,
      auth: state.auth
    };
  };
  const mapDispatchToProps = dispatch => ({
    fetchOrdersByCliens:(data)=>{dispatch(fetchOrdersByCliens(data))}
  });
 
class Account extends React.Component{

    componentDidMount(){
        if(localStorage.getItem('jwToken')){
        var user=jwt.decode(localStorage.getItem('jwToken'));

       this.props.fetchOrdersByCliens( user.cin) ;
       console.log(user);
        }
    else this.props.history.push('/home')
    }
    

  render() {
    var user=jwt.decode(localStorage.getItem('jwToken'));
        const orders = this.props.auth.orders.map(order => {
            var date =new Date(order.date)
            
            return (
              <tr>
                
                
                <td>{order.numCommande}</td>
                <td>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</td>
                <td>{order.etat}</td>
                <td>
                <FormDialog numCommande={order.numCommande} orders={this.props.auth.orders}/>
                </td>
              </tr>
            );
          });
          if(user)
    return (
      <div >
        <div class="container">
    <div class="row">
        <div class="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
            <div class="card mb-3">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Kathy Davis" class="img-fluid rounded-circle mb-2" width="128" height="128"/>
                    <h4 class="card-title mb-0">{user.nom} {user.prenom}</h4>
                    <div class="text-muted mb-2">Client</div>

                    
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    <div class="card-actions float-right">
                        <div class="dropdown show">
                            <a href="#" data-toggle="dropdown" data-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="card-title mb-0">About</h5>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mb-0">
                        <li class="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-sm mr-1">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg> Lives in {user.adresse}</li>
                            <br />
                        <li class="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase feather-sm mr-1">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg> Tel {user.telephone}</li>
                        
                    </ul>
                </div>
            </div>

            
        </div>

        <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
            <div class="card">
                <div class="card-body h-100">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      
                      <th scope="col">Order ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">State</th>
                      <th scope="col" ></th>
                    </tr>
                  </thead>
                  <tbody>{orders}</tbody>
                </table>
                  
                    
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
            <div class="card">
                <div class="card-header">
                    <div class="card-actions float-right">
                        <div class="dropdown show">
                            <a href="#" data-toggle="dropdown" data-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="card-title mb-0">Activities</h5>
                </div>
                <div class="card-body h-100">

                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Kathy Davis"/>
                        <div class="media-body">
                            <small class="float-right text-navy">5m ago</small>
                            <strong>Kathy Davis</strong> started following <strong>Marie Salter</strong>
                            <br/>
                            <small class="text-muted">Today 7:51 pm</small>
                            <br/>
                        </div>
                    </div>

  

                    <hr/>
                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter"/>
                        <div class="media-body">
                            <small class="float-right text-navy">1h ago</small>
                            <strong>Marie Salter</strong> posted a new blog
                            <br/>

                            <small class="text-muted">Today 6:35 pm</small>
                        </div>
                    </div>

                    <hr/>
                    
                   
                    
                    <a href="#" class="btn btn-primary btn-sm btn-block">Load more</a>
                </div>
            </div>
        </div>
    </div>

</div>

      </div>
    );
    else return(<Redirect to='/home' />)
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Account));
