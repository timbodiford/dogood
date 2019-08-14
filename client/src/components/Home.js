import React, { Component } from 'react'
import AllOrgs from './AllOrgs';
import AllVolunteers from './AllVolunteers';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div><h1>This should be the HOME container</h1></div>
                {/* <AllOrgs />
                <AllVolunteers /> */}
            </div>
        )
    }
}


