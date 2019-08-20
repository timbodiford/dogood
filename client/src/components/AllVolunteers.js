import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class AllVolunteers extends Component {

    state = {
        volunteers: []
    }

    componentDidMount() {
        this.getAllVolunteers()
    }

    getAllVolunteers = () => {
        axios.get('api/v1/volunteers/')
            .then((res) => {
                this.setState({ volunteers: res.data })
            })
    }


    render() {
        let volList = this.state.volunteers.map((volunteer) => {
            return (
                <Link to={`volunteers/${volunteer.id}`}>
                    <div className='vol-list'>
                        <Card style={{ maxWidth: 300 }}>
                                <CardContent>

                                    <Typography variant="h5" component="h2">
                                        {volunteer.name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {volunteer.city}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {volunteer.state}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {volunteer.phone}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                            </Card>
                    </div>
                    
                </Link>
            )
        })
        return (
            <div>
                <h3 >This component should show all volunteers</h3>
                <div className='vol-list'>
                    {volList}
                </div>
            </div>
        )
    }
}
