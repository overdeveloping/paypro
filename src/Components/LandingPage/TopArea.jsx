import React , {Component} from 'react';
import AOS from 'aos';
import './LandingPage.scss';




class TopArea extends Component{

    render(){


        return(
            <section className="top pt-6 pt-md-11 pb-11 pb-md-13 " >
            <div className="container-lg "  >
            <div className="row justify-content-center">
            <div className="col-md-9 text-center">
            
            <h1 className="display-3 mb-4">
            <span className=" d-sm-inline-block">
            Get paid easily via <span className="text-primary">your own custom link</span>.
            </span>
            </h1>
            </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
            
            <p className="lead text-muted">
           Paypro creates <strong className="text-primary">payment links</strong> to get paid easily. 
            </p>
            
            <a className="btn btn-try " href="" target="_ blank">
            <span className="d-sm-none">Try for free</span><span className="d-none d-sm-inline-block">Try Paypro For Free</span>
            </a>
            <a className="btn  text-primary  ml-3" href="/contact">
            <span className="d-sm-none ">Contact</span><span className="d-none d-sm-inline-block">Contact Us</span>
            </a>
            </div>
            </div>
            </div>
            </section>

            

         
        )
    }
}

export default TopArea;