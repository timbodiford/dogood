import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


export default class NewVolunteer extends Component {
    state = {
        newVolunteer: {
            name: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone: '',
            events: []
        },
        redirectToHome: false
    }

    handleChange = (evt) => {
        let copiedVolunteer = { ...this.state.newVolunteer }
        copiedVolunteer[evt.target.name] = evt.target.value
        this.setState({ newVolunteer: copiedVolunteer })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/v1/volunteers/', this.state.newVolunteer)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
            . catch ((err) => {
                console.log (err)
            })
        }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/volunteers" />
        }
        return (
            <div >
                {/* <h2>This component hould show the form to create a new volunteer</h2> */}
                <form onSubmit={this.handleSubmit} style={{maxWidth: 500, display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        id="name"
                        label="Volunteer Name:"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.name}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="address"
                        label="Address:"
                        name="address"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.address}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="city"
                        label="City:"
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.city}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="state"
                        label="State:"
                        name="state"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.state}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="zip_code"
                        label="Zip Code:"
                        name="zip_code"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.zip_code}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="phone"
                        label="Phone:"
                        name="phone"
                        onChange={this.handleChange}
                        value={this.state.newVolunteer.phone}
                        margin="normal"
                        variant="outlined"
                    />

                    <input type="submit" value="Create Volunteer" /> 
                </form>
            </div>
        )
    }
}
