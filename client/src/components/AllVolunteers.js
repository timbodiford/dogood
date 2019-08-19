import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                        {volunteer.name}
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <h2 >This component should show all volunteers</h2>
                <div className='vol-list'>
                    {volList}
                </div>
            </div>
        )
    }
}
