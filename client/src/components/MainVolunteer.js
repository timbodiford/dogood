import React, { Component } from 'react'
import NewOrgForm from './NewOrgForm';
import AllVolunteers from './AllVolunteers';
import NewVolunteer from './NewVolunteer';
import { Redirect } from 'react-router-dom'


export default class MainVolunteer extends Component {
    state = {
        redirectToHome: false,
        isNewVolunteerFormDisplayed: false
    }

    componentDidMount() {
        this.setState({ isNewVolunteerFormDisplayed: false })
    }

    handleShowNewForm = (evt) => {
        this.setState({ isNewVolunteerFormDisplayed: true })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/volunteers' />
        }
        return (
            <div>
                <h1>This will be the main volunteer container</h1>
                {
                    this.state.isNewVolunteerFormDisplayed
                        ?
                        <NewVolunteer />
                        :
                        <div>
                            <p>Click here to create a new Volunteer</p>
                            <button onClick={this.handleShowNewForm}>Create Volunteer</button>
                            <AllVolunteers />
                        </div>
                }
            </div>
        )
    }
}
