import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import AllOrgs from './components/AllOrgs';
import AllVolunteers from './components/AllVolunteers';

function App() {
  return (
    <div>
      <Router>
        <h1>DoGood</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/organizations" component={AllOrgs} />
          <Route  path="/volunteers" component={AllVolunteers} />

          <Route exact path="/" component={Home} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;
