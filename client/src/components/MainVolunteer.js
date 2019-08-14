import React, { Component } from 'react'
import NewOrgForm from './NewOrgForm';
import AllVolunteers from './AllVolunteers';
import NewVolunteer from './NewVolunteer';

export default class MainVolunteer extends Component {
    render() {
        return (
            <div>
                    <h1>This will be the main volunteer container</h1>
            <NewVolunteer />
            <AllVolunteers />
            </div>
        )
    }
}
