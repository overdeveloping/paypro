import React, {Component} from 'react';
import TopArea from './TopArea';
import MiddleArea from './MiddleArea';
import FooterArea from './FooterArea';


class Landing extends Component {
render(){
    return(

        <div>
            <TopArea/>
            <MiddleArea/>
            <FooterArea/>

        </div>
    )
}
}

export default Landing;