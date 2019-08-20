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
                    <h3>"Add quote here"</h3>
                    <h4> - From famous person</h4>
                </div>
                <h2>Volunteers</h2>
                <div className="main-org-div">
                    <h3>This will be the main volunteer container</h3>
                </div>
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
