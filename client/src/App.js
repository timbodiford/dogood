import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import AllOrgs from './components/AllOrgs';
import MainVolunteer from './components/MainVolunteer';
import AllEvents from './components/AllEvents';
import ViewOrg from './components/ViewOrg';
import ViewVolunteer from './components/ViewVolunteer';
import ViewEvent from './components/ViewEvent';
import NewOrgForm from './components/NewOrgForm';
import NewVolunteer from './components/NewVolunteer';
import NewEvent from './components/NewEvent';
import MainOrg from './components/MainOrg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="organizations/:orgId/events/:eventId" component={ViewEvent} /> */}
          <Route path="/organizations/new" component={NewOrgForm} />
          <Route path="/organizations/:orgId" component={ViewOrg} />
          <Route path="/organizations" component={MainOrg} />
          <Route path="/volunteers/new" component={NewVolunteer} />
          <Route path="/volunteers/:volId" component={ViewVolunteer} />
          <Route path="/volunteers" component={MainVolunteer} />
            <Route path="/events/:eventId" component={ViewEvent} />
          <Route path="/events/new" component={NewEvent} />
          <Route path="/events" component={AllEvents} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
