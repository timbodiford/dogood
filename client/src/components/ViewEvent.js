import React, { Component } from 'react'
import axios from 'axios'


export default class ViewEvent extends Component {

    state = {
        event: {}
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
    render() {
        return (
            <div>
                <h1>This component should show an individual event</h1>
                <h4>{this.state.event.title}</h4>
                <p>{this.state.event.description}</p>

            </div>
        )
    }
}

