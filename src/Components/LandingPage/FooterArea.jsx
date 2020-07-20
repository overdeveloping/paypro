import React , {Component} from 'react';
import logo from  './logo.svg';


import {Container, Image, Nav} from 'react-bootstrap';
 


class FooterArea extends Component{

    render(){


        return(
            <footer class="footer   border-top border-gray-900">
            <Container fluid>
            <div class="row justify-content-between">
            <div class="col-md-4">
            
            <Image src={logo} fluid/>
            <p class="">
            Payments made simple.
            </p>
           
            </div>
            <div class="col-6 col-md">
            
            <h6 class="text-uppercase text-white mb-3 mb-md-5">
            about
            </h6>
            

           
            <ul class="list-unstyled">
            <li class="mb-3">
            <a class="footer-links" href="/">Home</a>
            </li>
            <li class="mb-3">
            <a class="footer-links" href="/features">Features</a>
            </li>
            <li class="mb-3">
            <a class="footer-links" href="/pricing">Pricing</a>
            </li>
            <li class="mb-3">
            <a class="footer-links" href="/security">Security</a>
            </li>
            <li>
            <a class="footer-links" href="https://app.superpayit.com/">Dashboard</a>
            </li>
            </ul>
            </div>
            <div class="col-6 col-md">
            
            <h6 class="text-uppercase text-white mb-3 mb-md-5">
            legal
            </h6>
            
            <ul class="list-unstyled">
            <li class="mb-3">
            <a class="footer-links" href="/terms" target="_blank">Terms &amp; Conditions</a>
            </li>
            <li class="mb-3">
            <a class="footer-links" href="/privacy" target="_blank">Privacy Policy</a>
            </li>
            </ul>
            </div>
            
             <div class="col-12 text-center mt-10">
            <small class="text-light">
           PayaPro 2020 . All rights Reserved © 
            </small>
            </div>
            </div>
            </Container>
            </footer>
        )
    }
}

export default FooterArea;