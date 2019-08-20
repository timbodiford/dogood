import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrgEvents from './OrgEvents'
import NewEvent from './NewEvent'
import { Redirect } from 'react-router-dom'
import EditOrg from './EditOrg';




export default class ViewOrg extends Component {

    state = {
        organization: {
            events: []
        },
        isNewEventFormDisplayed: false,
        isEditOrgFormDisplayed: false,
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
    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditOrgFormDisplayed: !state.isEditOrgFormDisplayed }
        })
    }
    handleInputEdit = (event) => {
        const copiedOrganization = { ...this.state.organization }
        copiedOrganization[event.target.name] = event.target.value
        this.setState({ organization : copiedOrganization })
    }

    handleEdit = (event) => {
        event.preventDefault()

        axios.put(`/api/v1/organizations/${this.state.organization.id}/`, this.state.organization)
            .then((res) => {
                this.setState({
                    isEditOrgFormDisplayed: false
                })

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
                {
                    this.state.isEditOrgFormDisplayed
                        ?
                        <form onSubmit={this.handleEdit}>
                        <div>
                            <label htmlFor="org-name">Name of Organization: </label>
                            <input type="text" name="org_name" id="org-name" onChange={this.handleInputEdit} value={this.state.organization.org_name} />
                        </div>
                        <div>
                            <label htmlFor="contact-person">Contact Name: </label>
                            <input type="text" name="contact_person" id="contact-person" onChange={this.handleInputEdit} value={this.state.organization.contact_person} />
                        </div>
                        <div>
                            <label htmlFor="contact-phone">Phone #: </label>
                            <input type="text" name="contact_phone" id="contact-phone" onChange={this.handleInputEdit} value={this.state.organization.contact_phone} />
                        </div>
                        <div>
                            <label htmlFor="contact-email">Email Address: </label>
                            <input type="text" name="contact_email" id="contact-email" onChange={this.handleInputEdit} value={this.state.organization.contact_email} />
                        </div>
    
                        <input type="submit" value="Save Changes" />
                    </form>                      
                      :
                        <div className='view-one'>
                            <h3>Organization Information</h3>
                            <h4>{this.state.organization.org_name}</h4>
                            <h4> {this.state.organization.contact_person}</h4>
                            <h4>{this.state.organization.contact_phone}</h4>
                            <h4>{this.state.organization.contact_email}</h4>
                            <Link to="/organizations">
                                <button type="button">Back to Organizations</button>
                            </Link>
                            <button type="button" onClick={this.handleToggleEditForm}>Edit Organization</button>
                            <button onClick={this.handleDelete}>Delete Organization</button>

                        </div>
                }

                <h3>This is a list of event for this org</h3>
                {eventList}

                Adding ternary below here for new event form...
                {
                    this.state.isNewEventFormDisplayed
                        ?
                        <NewEvent org={org} />

                        :
                        <div>
                            <button onClick={this.handleShowNewForm}>Create an Event</button>
                        </div>
                }
            </div>
        )
    }
}