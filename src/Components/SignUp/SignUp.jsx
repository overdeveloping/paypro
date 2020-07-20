import React , {Component} from 'react';
import {Form, Button, Col, Container, Row} from 'react-bootstrap';
import './SignUp.scss'



class SignUp extends Component{

    render(){


        return(
        <Container>
<Container>
          <Row >
            <Col xs={{span:12, offset:0}} md={{span:6}}>
          <h1 >
          <span className=" d-sm-inline-block">
           <span className="text-primary">Sign Up</span> with PayPro today!!
            </span>
            </h1>
            <Form>

   <Row >
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
    </Row>


    <Form.Group className='my-4' controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control type='email' placeholder="Enter Email"/>
    </Form.Group>

     <Form.Group  className='my-4' controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  

    <Form.Group className='my-4' controlId="formGridPassword">
    <Button variant="btn btn-info w-100" type="submit">
    <h6>Create my PayPro account</h6>
  </Button>
    </Form.Group>

  

</Form>


</Col>
<Col className='justify-content-center'>
<div class="vl"></div>
</Col>

<Col xs={{span:12}}  md={{span:5}} className="d-none d-sm-none d-md-block" >
          <h1 >
          <span className=" d-sm-inline-block">
          Already a Member? <span className="text-primary text-success">Log In!</span>
            </span>
            </h1>
            <Form>

  


    <Form.Group className='my-4' controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control type='email' placeholder="Enter Email"/>
    </Form.Group>

     <Form.Group  className='my-4' controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  

    <Form.Group className='my-4' controlId="formGridPassword">
    <Button variant="btn btn-success w-100" type="submit">
    <h6>Login</h6>
  </Button>
    </Form.Group>

  

</Form>


</Col>
</Row>
</Container>

</Container>
        )
    }
}

const style = {
  margin: '20px',

}

export default SignUp;