import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewEvent from './NewEvent'
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';





export default class ViewOrg extends Component {

    state = {
        organization: {
            events: []
        },
        isNewEventFormDisplayed: false,
        isEditOrgFormDisplayed: false,
        redirectToHome: false,
        hideNewEventForm: true


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
        this.setState({ organization: copiedOrganization })
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

                    <Card style={{ maxWidth: 300 }}>
                        <CardContent>

                            <Typography variant="h5" component="h2">
                                {event.title}
                            </Typography>
                            <Typography color="textSecondary">
                                {event.description}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {event.location_city}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
                    </Card>
                </Link>

            )
        })

        let org = this.state.organization

        return (
            <div className="view-one">
                {
                    this.state.isEditOrgFormDisplayed
                        ?
                        <form onSubmit={this.handleEdit}>
                            <div>
                                <TextField
                                    id="org_name"
                                    label="Name:"
                                    name="org_name"
                                    onChange={this.handleInputEdit}
                                    value={this.state.organization.org_name}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="contact_person"
                                    label="Contact Name:"
                                    name="contact_person"
                                    onChange={this.handleInputEdit}
                                    value={this.state.organization.contact_person}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="contact_phone"
                                    label="Phone #:"
                                    name="contact_phone"
                                    onChange={this.handleInputEdit}
                                    value={this.state.organization.contact_phone}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="contact_email"
                                    label="Email Address:"
                                    name="contact_email"
                                    onChange={this.handleInputEdit}
                                    value={this.state.organization.contact_email}
                                    margin="normal"
                                    variant="outlined"
                                />
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
                <div className='view-one'>
                    <h3>Events you've created</h3>
                    {eventList}

                    {
                        this.state.isNewEventFormDisplayed
                            ?
                            <div>
                                <NewEvent org={org} />

                                <button onClick={this.hideNewEventForm}>Cancel</button>
                            </div>
                            :
                            <div>
                                <button onClick={this.handleShowNewForm}>Add Event</button>

                            </div>
                    }
                </div>
            </div>
        )
    }
}