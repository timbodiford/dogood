import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import AllEvents from './AllEvents'



export default class ViewVolunteer extends Component {

    state = {
        volunteer: {
            events: []
        },
        isEditVolFormDisplayed: false,
        redirectToHome: false
    }

    componentDidMount() {
        this.getVol()
    }

    getVol = () => {
        axios.get(`/api/v1/volunteers/${this.props.match.params.volId}/`)
            .then((res) => {
                this.setState({ volunteer: res.data })
            })
    }
    handleShowNewForm = (evt) => {
        this.setState({ isNewEventFormDisplayed: true })
    }


    handleDelete = () => {
        axios.delete(`/api/v1/volunteers/${this.state.volunteer.id}/`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }
    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditVolFormDisplayed: !state.isEditVolFormDisplayed }
        })
    }
    handleInputEdit = (event) => {
        const copiedVolunteer = { ...this.state.volunteer }
        copiedVolunteer[event.target.name] = event.target.value
        this.setState({ volunteer: copiedVolunteer })
    }

    handleEdit = (event) => {
        event.preventDefault()

        axios.put(`/api/v1/volunteers/${this.state.volunteer.id}/`, this.state.volunteer)
            .then((res) => {
                this.setState({
                    isEditVolFormDisplayed: false
                })

            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/volunteers`} />
        }
        // Do I use this list of event ids in conjunction with another axios call to get the details for each of these ids?
        let volEventList = this.state.volunteer.events.map((eventId) => {
            return (
                <div>
                    {eventId}
                </div>
            )
        })
        return (
            <div className='view-one'>
                {
                    this.state.isEditVolFormDisplayed
                        ?
                        <form onSubmit={this.handleEdit}>
                            <div>
                            <TextField
                                id="name"
                                label="Name:"
                                name="name"
                                onChange={this.handleInputEdit}
                                value={this.state.volunteer.name}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            <div>
                            <TextField
                                id="address"
                                label="Address:"
                                name="address"
                                onChange={this.handleInputEdit}
                                value={this.state.volunteer.address}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            <div>
                            <TextField
                                id="city"
                                label="City:"
                                name="city"
                                onChange={this.handleInputEdit}
                                value={this.state.volunteer.city}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            <div>
                            <TextField
                                id="state"
                                label="State:"
                                name="state"
                                onChange={this.handleInputEdit}
                                value={this.state.volunteer.state}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>
                            <div>
                            <TextField
                                id="zip_code"
                                label="Zip:"
                                name="zip_code"
                                onChange={this.handleInputEdit}
                                value={this.state.volunteer.zip_code}
                                margin="normal"
                                variant="outlined"
                            />
                            </div>

                            <input type="submit" value="Edit Volunteer" />
                        </form>

                        :
                        <div className="view-one">
                            <h1>Volunteer's Information</h1>
                            <h4>Name: {this.state.volunteer.name}</h4>
                            <p>Address: {this.state.volunteer.address}</p>
                            <p>City: {this.state.volunteer.city}</p>
                            <p> State: {this.state.volunteer.state}</p>
                            <p>Zip Code: {this.state.volunteer.zip_code}</p>
                            {/* <p>{}</p> */}
                            <Link to="/volunteers">
                                <button type="button">Back to Volunteers</button>
                            </Link>
                            <button type="button" onClick={this.handleToggleEditForm}>Edit Volunteer</button>

                            <button onClick={this.handleDelete}>Delete This Volunteer</button>
                        </div>
                }
                <h4>Events you've signed up for:</h4>
                {volEventList}
                {/* {
                    this.state.volunteer.events.eventId
                        ?
                        <div>
                            <p>It looks like you haven't signed up for any events.  Click below to see all available volunteer events.</p>
                            <AllEvents />
                        </div>
                        :
                        { volEventList }
                } */}
            </div>
        )
    }
}
