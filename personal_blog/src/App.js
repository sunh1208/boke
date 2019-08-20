import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import config from './router/config'
import router from './router'
function App() {
 let routes=router.router
 console.log(routes)
  return (
    <Router>
        <Switch>
          {config(routes)}
          <Redirect to='/login'></Redirect>
      </Switch>
    </Router>

   )
  
}

export default App;
