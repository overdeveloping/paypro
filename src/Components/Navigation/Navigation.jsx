import React , {Component} from 'react';
import './Navigation.scss';


import {Nav ,Navbar, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Navigation extends Component{

    render(){


        return(
           <div>



<Container className='justify-content-center' >
     
<Navbar   expand="lg" className='navbar' varient='light'>

<Link to='/'>
      <Navbar.Brand href="/" className='d-lg-none '>PayPro</Navbar.Brand>
      </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center w-100">
     
    <Link style = {linkStyle} to='/Signup'>
      <Nav.Link className="nav-link m-2" href="#link">Features</Nav.Link>
      </Link>
      <Link style = {linkStyle} to='/Dashboard'>
      <Nav.Link className="nav-link m-2" href="#link">Dashboard</Nav.Link>
      </Link>
      
      <Link style = {linkStyle} to='/'>
      <Navbar.Brand href="/" className='d-none d-lg-block nav-link m-2 '>PayPro</Navbar.Brand>
      </Link>
    
     
      <Link style = {linkStyle} to='/Signup'>
      <Nav.Link className="nav-link m-2 " href="#link">Sign Up</Nav.Link>
      </Link>
      <Link style = {linkStyle} to='/Signup'>
      <Nav.Link className="nav-link m-2 " href="#link">Pricing</Nav.Link>
      </Link>
     
      </Nav>
     
    
    
  </Navbar.Collapse>

</Navbar>
</Container>







           </div>
        )
    }
}

const linkStyle =  {
    textDecoration: 'none',
    
    fontSize: '16px'
}

export default Navigation;




