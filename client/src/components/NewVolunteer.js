import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
            <div>
                <h2>This component hould show the form to create a new volunteer</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Volunteer Name: </label>
                        <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.newVolunteer.name} />
                    </div>

                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name="address" id="address" onChange={this.handleChange} value={this.state.newVolunteer.address} />
                    </div>

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" onChange={this.handleChange} value={this.state.newVolunteer.city} />
                    </div>

                    <div>
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id="state" onChange={this.handleChange} value={this.state.newVolunteer.state} />
                    </div>

                    <div>
                        <label htmlFor="zip-code">Zip Code: </label>
                        <input type="text" name="zip_code" id="zip-code" onChange={this.handleChange} value={this.state.newVolunteer.zip_code} />
                    </div>

                    <div>
                        <label htmlFor="phone">Zip Code: </label>
                        <input type="text" name="phone" id="phone" onChange={this.handleChange} value={this.state.newVolunteer.phone} />
                    </div>

                    <input type="submit" value="Create Volunteer" /> 
                </form>
            </div>
        )
    }
}
