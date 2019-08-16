import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'




export default class ViewEvent extends Component {

    state = {
        event: {},
        redirectToHome: false

    }

    componentDidMount() {
        this.getEvent()
    }

    getEvent = () => {
        axios.get(`/api/v1/events/${this.props.match.params.eventId}/`)
            .then((res) => {
                this.setState({ event: res.data })
            })
    }
    handleDelete = () => {
        axios.delete(`/api/v1/events/${this.state.event.id}/`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/organizations`} />
        }
        return (
            <div>
                <h1>This component should show an individual event</h1>
                <h4>{this.state.event.title}</h4>
                <p>{this.state.event.description}</p>
                <Link to="/">
                    <button type="button">Back to Home</button>
                </Link>
                <button onClick={this.handleDelete}>Delete Event</button>

            </div>
        )
    }
}

