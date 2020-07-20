import React , {Component} from 'react';
import './LandingPage.scss';

import{Image, Card, Container, ListGroup } from 'react-bootstrap';

class MiddleArea extends Component{

    render(){

        return(
            
    <section >
        
    <Card className='feature pt-md-12 pb-11 pb-md-13 aos-init aos-animate my-5' data-aos="fade-up">
    <Container>
    <div className="row align-items-center justify-content-between m-2">
   
    <div className="col-md-6 col-lg-5 order-md-0" >
    
    <div className="display-4 mb-4">
    Features
    </div>
    <p>
    Paypro will take care of...
    </p>
    
 
    <p>

    </p>
    
   <ListGroup variant="flush">
    <ListGroup.Item> share a link and get paid</ListGroup.Item>
    <ListGroup.Item>   freelancer friendly</ListGroup.Item>
    <ListGroup.Item> better way to accept payment for digital services </ListGroup.Item>
    <ListGroup.Item>   very secure </ListGroup.Item>
    </ListGroup>

    <a className="btn btn-try" href="https://app.superpayit.com/auth/signup/" target="_blank">
   Sign up Today
    </a>
    
    </div>

    <Image src="http://lorempixel.com/400/200" fluid/>

    </div>
    </Container>
   </Card>
   <Card className='feature pt-md-12 pb-11 pb-md-13 aos-init aos-animate my-5' data-aos="fade-up">
    <Container>
    
    <div className="row align-items-center justify-content-between m-2">
    <Image src="http://lorempixel.com/400/200" fluid/>
    <div className="col-md-6 col-lg-5 order-md-0" >
    
    <div className="display-4 mb-4 lead">
   Pricing 
    </div>
    
 
    <p>
  Start your free trial today 
    </p>
    
   <ListGroup variant="flush">
    <ListGroup.Item>  As low as $10 a month</ListGroup.Item>
    <ListGroup.Item>    Collect one-off setup fees with a simple toggle</ListGroup.Item>
  
    </ListGroup>

    <a className="btn btn-try" href="https://app.superpayit.com/auth/signup/" target="_blank">
    Try for free
    </a>
    
    </div>

    
    </div>
    </Container>
   </Card>
   
   
    </section>
        )
    }
}

export default MiddleArea;