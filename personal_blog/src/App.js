import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import config from './router/config';
import router from './router'
function App() {
  let routes = router.router
  // console.log(routes)
  return (

    <Router>
      <Switch>
        {
          config(routes)
        }
      </Switch>
    </Router>

  )

}

export default App;
