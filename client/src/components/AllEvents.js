import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

                <div className='org-list'>
                    <Link to={`events/${event.id}`}>

                        <Card style={{ maxWidth: 500 }}>
                            <CardContent>

                                <Typography variant="h5" component="h2">
                                    {event.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {event.description}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {event.location_city}, {event.location_state} {event.location_zip}
                                </Typography>

                            </CardContent>

                        </Card>
                    </Link>
                </div>
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



