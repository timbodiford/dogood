import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrgEvents from './OrgEvents'
import NewEvent from './NewEvent'
import {Redirect} from 'react-router-dom'




export default class ViewOrg extends Component {

    state = {
        organization: {
            events: []
        },
        isNewEventFormDisplayed: false,
        redirectToHome: false

    }

    componentDidMount() {
        this.getOrg()
        // this.setState({ isNewEventFormDisplayed: false})
    }

    getOrg = () => {
        axios.get(`/api/v1/organizations/${this.props.match.params.orgId}/`)
            .then((res) => {
                this.setState({ organization: res.data })
            })
    }
    handleShowNewForm = (evt) => {
        this.setState({ isNewEventFormDisplayed: true })
    }

    handleDelete = () => {
        axios.delete(`/api/v1/organizations/${this.state.organization.id}/`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/organizations`} />
        }

        let eventList = this.state.organization.events.map((event) => {
            return (
                <Link to={`/events/${event.id}`}>
                    <div>
                        {event.title}
                    </div>
                </Link>
            )
        })

        let org = this.state.organization

        return (
            <div>
                <h3>Organization Information</h3>
                <h4>{this.state.organization.org_name}</h4>
                <h4> {this.state.organization.contact_person}</h4>
                <h4>{this.state.organization.contact_phone}</h4>
                <h4>{this.state.organization.contact_email}</h4>
                <Link to="/organizations">
                    <button type="button">Back to Organizations</button>
                </Link>
                <button onClick={this.handleDelete}>Delete Organization</button>


                {/* <OrgEvents eventList={eventList} /> */}
                <h3>This is a list of event for this org</h3>
                {eventList}

                Adding ternary below here for new event form...
                {
                    this.state.isNewEventFormDisplayed
                        ?
                        <NewEvent org={org}/>

                        :
                        <div>
                            <button onClick={this.handleShowNewForm}>Create an Event</button>
                        </div>
                }
            </div>
        )
    }
}