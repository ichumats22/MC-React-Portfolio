import React from 'react'
import { BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';
import './App.css'

import Sidenav from './components/Sidenav'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import NoMatch from './pages/Undefined'
import './assets/css/mediaQueries.css'


 
function App() {
    return (
      <HashRouter>
        <div className='container-fluid'>
          <Sidenav> </Sidenav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/resume' component={Resume}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/portfolio/:id' component={PortfolioDetail}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>  
    )
}
 
export default App;