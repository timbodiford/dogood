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
                            //     <Link to={`organizations/${organization.id}`}>
                            //     <div className='org-list'>
            
                            //     </div>
                            //     <Card >
                            //     <CardContent>
             
                            //       <Typography variant="h5" component="h2">
                            //       {organization.org_name}
                            //       </Typography>
                            //       <Typography  color="textSecondary">
                            //       {organization.contact_person}
                            //       </Typography>
                            //       <Typography variant="body2" component="p">
                            //         well meaning and kindly.
                            //         <br />
                            //         {'"a benevolent smile"'}
                            //       </Typography>
                            //     </CardContent>
                            //     <CardActions>
                            //       <Button size="small">Learn More</Button>
                            //     </CardActions>
                            //   </Card>
                            //   </Link>
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



