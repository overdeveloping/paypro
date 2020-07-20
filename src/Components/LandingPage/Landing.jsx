import React, {Component} from 'react';
import TopArea from './TopArea';
import Pricing from './Pricing';
import FooterArea from './FooterArea';
import Features from './Features';


class Landing extends Component {
render(){
    return(

        <div>
            <TopArea/>
            <Features/>
            <Pricing/>
            <FooterArea/>

        </div>
    )
}
}

export default Landing;