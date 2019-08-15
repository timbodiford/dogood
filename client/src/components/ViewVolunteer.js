import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ViewVolunteer extends Component {

    state = {
        volunteer: {}
    }

    componentDidMount() {
        this.getVol()
    }

    getVol = () => {
        axios.get(`/api/v1/volunteers/${this.props.match.params.volId}/`)
        .then((res) => {
            this.setState({ volunteer: res.data })
        })
    }

    render() {
        return (
            <div>
                    <h1>This component should show a single volunteer</h1>
                <h4>{this.state.volunteer.name}</h4>
                <p>{this.state.volunteer.address}</p>
                <p>{this.state.volunteer.city}</p>
                <p>{this.state.volunteer.state}</p>
                <p>{this.state.volunteer.zip_code}</p>
                {/* <p>{}</p> */}
                <Link to="/">
                    <button type="button">Back to Home</button>
                </Link>

            </div>
        )
    }
}
