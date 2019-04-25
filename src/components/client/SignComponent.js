import React from 'react';
import {withRouter} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
    import createBrowserHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';
import {userSignup} from './../../redux/ActionCreators'
const history = createBrowserHistory({forceRefresh:true});
class Sign extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            password:'',
            password2:'',
            contactType: 'Tel.',
            gendre:'',
            adresse:''
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
        this.props.userSignup(this.state).then(this.props.history.push('home'))
    }

    render(){
        return(
            <div className="row row-content">
            <div className="col-6 offset-3">
               <h3>Create your account</h3>
            </div>
             <div className="col-12 col-md-8 offset-3">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                         <Label htmlFor="firstname" md={2}>First Name</Label>
                         <Col md={7}>
                             <Input type="text" id="firstname" name="firstname"
                                 placeholder="First Name"
                                 value={this.state.firstname}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="lastname" md={2}>Last Name</Label>
                         <Col md={7}>
                             <Input type="text" id="lastname" name="lastname"
                                 placeholder="Last Name"
                                 value={this.state.lastname}
                                 onChange={this.handleInputChange} />
                         </Col>                        
                     </FormGroup>
                     
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
                                 placeholder="password"
                                 value={this.state.password}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="password2" md={2}>Confirm Password</Label>
                         <Col md={7}>
                             <Input type="password2" id="password2" name="password2"
                                 placeholder="Retype password"
                                 value={this.state.password2}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="adresse" md={2}>Adresse</Label>
                         <Col md={7}>
                             <Input type="text" id="adresse" name="adresse"
                                 placeholder="Adresse"
                                 value={this.state.addresse}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                         <Col md={7}>
                             <Input type="tel" id="telnum" name="telnum"
                                 placeholder="Tel. number"
                                 value={this.state.telnum}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     
                      <FormGroup row>
                         <Col md={{size: 4, offset: 2}}>
                             <FormGroup check>
                                 <Label check>
                                     <Input type="radio"
                                         name="gendre"
                                         value="Male"
                                         onChange={this.handleInputChange} /> {' '}
                                     <strong>Male</strong>
                                 </Label>
                             </FormGroup>
                         </Col>
                       {/*  <Col md={{size: 3, offset: 0}}>
                             <Input type="select" name="contactType"
                                     value={this.state.contactType}
                                     onChange={this.handleInputChange}>
                                 <option>Tel.</option>
                                 <option>Email</option>
                             </Input>
                         </Col>*/}
                         <Col md={{size: 4}}>
                             <FormGroup check>
                                 <Label check>
                                     <Input type="radio"
                                         name="gendre"
                                         value="Female"
                                         onChange={this.handleInputChange} /> {' '}
                                     <strong>Female</strong>
                                 </Label>
                             </FormGroup>
                         </Col>
                     </FormGroup> 
                     <FormGroup row>
                         <Col md={{size: 7, offset: 2}}>
                             <Button type="submit" color="primary">
                                 Submit
                             </Button>
                         </Col>
                     </FormGroup>
                 </Form>
             </div>
        </div>

        );
    }    
}
export default withRouter(connect (null,{userSignup})(Sign));