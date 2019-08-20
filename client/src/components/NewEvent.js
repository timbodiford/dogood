import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


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
            <div >
                <h1>Add A New Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            id="title"
                            label="Event Name:"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.newEvent.title}
                            margin="normal"
                            variant="outlined"
                        /></div>
                    <div>
                        <TextField
                            id="description"
                            label="Event Description:"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newEvent.description}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="location_address"
                            label="Address:"
                            name="location_address"
                            onChange={this.handleChange}
                            value={this.state.newEvent.location_address}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="location_city"
                            label="City:"
                            name="location_city"
                            onChange={this.handleChange}
                            value={this.state.newEvent.location_city}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="location_state"
                            label="State:"
                            name="location_state"
                            onChange={this.handleChange}
                            value={this.state.newEvent.location_state}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="location_zip"
                            label="Zip:"
                            name="location_zip"
                            onChange={this.handleChange}
                            value={this.state.newEvent.location_zip}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="category"
                            label="Category:"
                            name="category"
                            onChange={this.handleChange}
                            value={this.state.newEvent.category}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <input type="submit" value="Create Event" />
                </form>
            </div>
        )
    }
}
