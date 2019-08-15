import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class AllEvents extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        this.getAllEvents()
    }

    getAllEvents = () => {
        axios.get(`api/v1/events/`)
            .then((res) => {
                this.setState({ events: res.data })
            })
    }

    render() {
        let eventList = this.state.events.map((event) => {
            return (
                <Link to={`events/${event.id}`}>
                    <div>
                        {event.title}
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <h1>This comnponent should show all events</h1>
                {eventList}
            </div>
        )
    }
}



