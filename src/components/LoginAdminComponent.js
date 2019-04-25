import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {loginAdmin} from './../redux/ActionCreators';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
class LoginAdmin extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
            errors:{}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.loginAdmin(this.state,this.props.history)
        
    }

    render(){
        return(
            <div className="row row-content">
            <div className="col-6 offset-3">
               <h3>Admin Login</h3>
            </div>
            <p>{this.state.errors.form}</p>
             <div className="col-11 col-md-8 offset-md-3">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                         <Label htmlFor="email" md={2}>Email</Label>
                         <Col md={7}>
                             <Input type="email" id="email" name="email"
                                 placeholder="Email"
                                 value={this.state.email}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="password" md={2}>Password</Label>
                         <Col md={7}>
                             <Input type="password" id="password" name="password"
                                 placeholder="Password"
                                 value={this.state.passwoed}
                                 onChange={this.handleInputChange} />
                         </Col>                        
                     </FormGroup>
                     
                     
                     <FormGroup row>
                         <Col md={{size: 7, offset: 2}}>
                             <Button className="col-md-12" type="submit" color="primary">
                                 Submit
                             </Button>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     <Col className="mt-2" md={{size: 3, offset: 3}}>
                        <h6>If you haven't an account</h6>
                     </Col>
                         <Col md={{size: 2, offset: 0}}>
                         
                             <Link to='/signup'> <Button className="col-md-12"  color="primary">
                                 Sign Up
                             </Button>
                             </Link>
                         </Col>
                     </FormGroup>
                 </Form>
             </div>
        </div>

        );
    }    
}
export default withRouter(connect (null,{loginAdmin})(LoginAdmin));