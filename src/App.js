import React, { Component } from 'react'
import { BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';
import Sidenav from './components/Sidenav'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import './App.css'


 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='container-fluid'>
          <Sidenav> </Sidenav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/resume' component={Resume}/>
            <Route exact path='/portfolio' component={Portfolio}/>
          </Switch>
        </div>
      </HashRouter>  
    )
  }
}
 
export default App;