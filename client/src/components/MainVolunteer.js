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
            <div className="volwrapper">
                <div className='org-quote'>
                    <h3>“Service to others is the rent you pay for your room here on Earth.”</h3>
                    <h4> - Muhammad Ali</h4>
                </div>
                <h2>Volunteers</h2>
                <div className="main-org-div">
                    <div className="form-toggle">
                        {
                            this.state.isNewVolunteerFormDisplayed
                                ?
                                <div className='newformarea'>
                                <NewVolunteer />
                                <button onClick={this.handleShowNewForm}>Cancel</button>
                                </div>
                                :
                                <div className='create-org-button'>
                                    <h3>Click here to create a new Volunteer</h3>
                                    <button onClick={this.handleShowNewForm}>Create Volunteer</button>
                                </div>

                        }
                    </div>
                <AllVolunteers />
                </div>
                        </div>
        )
    }
}
