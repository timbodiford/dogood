import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewEvent extends Component {

    state = {
        newEvent: {
            title: '',
            description: '',
            location_address: '',
            location_city: '',
            location_state: '',
            location_zip: '',
            category: '',
            org_name: this.props.org.id
        },
        redirectToHome: false
    }

    handleChange = (evt) => {
        let copiedEvent = { ...this.state.newEvent }
        copiedEvent[evt.target.name] = evt.target.value
        this.setState({ newEvent: copiedEvent })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/v1/events/', this.state.newEvent)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Add A New Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Name of Event: </label>
                        <input type="text" name="title" id="Title" onChange={this.handleChange} value={this.state.newEvent.title} />
                    </div>
                    <div>
                        <label htmlFor="description">Event Description: </label>
                        <input type="text" name="description" id="description" onChange={this.handleChange} value={this.state.newEvent.description} />
                    </div>
                    <div>
                        <label htmlFor="location-address">Event Address: </label>
                        <input type="text" name="location_address" id="location-address" onChange={this.handleChange} value={this.state.newEvent.location_address} />
                    </div>
                    <div>
                        <label htmlFor="location-city">City: </label>
                        <input type="text" name="location_city" id="location-city" onChange={this.handleChange} value={this.state.newEvent.location_city} />
                    </div>
                    <div>
                        <label htmlFor="location-state">State: </label>
                        <input type="text" name="location_state" id="location-state" onChange={this.handleChange} value={this.state.newEvent.location_state} />
                    </div>
                    <div>
                        <label htmlFor="location-zip">Zip Code: </label>
                        <input type="text" name="location_zip" id="location-zip" onChange={this.handleChange} value={this.state.newEvent.location_zip} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input type="text" name="category" id="category" onChange={this.handleChange} value={this.state.newEvent.category} />
                    </div>

                    <input type="submit" value="Create" />
                </form>
            </div>
        )
    }
}
