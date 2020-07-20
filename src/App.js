import React from 'react'; 
import  {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navigation from './Components/Navigation/Navigation';
import Landing from './Components/LandingPage/Landing';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard'








function App() {
  return (
<div>
 <Router>
    <Navigation/>
    <Switch>
    <Route path='/' exact component= {Landing} />
  <Route path='/Signup' component={SignUp} />
  <Route path='/Dashboard' component={Dashboard}/>
  
  </Switch>
  </Router>


  
</div>
  );
}

export default App;
