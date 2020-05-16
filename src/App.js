import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';
import Sidenav from './Components/Sidenav'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'

import './Assets/css/style.css'
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='container-fluid'>
          <Sidenav> </Sidenav>
          <Switch>
            <Route exact path="/" component={Home}/>
            
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/portfolio" component={Portfolio}/>
          </Switch>
        </div>
      </HashRouter>  
    )
  }
}
 
export default App;