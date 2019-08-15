import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class ViewOrg extends Component {

    state = {
        organization: {
            events: []
        }
    }

    componentDidMount() {
        this.getOrg()
    }

    getOrg = () => {
        axios.get(`/api/v1/organizations/${this.props.match.params.orgId}/`)
            .then((res) => {
                this.setState({ organization: res.data })
            })
    }

    render() {

        let eventList = this.state.organization.events.map((event) => {
            return (
                <p>{event.title}</p>
            )
        })

        return (
            <div>
                <h3>Organization Information</h3>
                <h4>{this.state.organization.org_name}</h4>
                <h4> {this.state.organization.contact_person}</h4>
                <h4>{this.state.organization.contact_phone}</h4>
                <h4>{this.state.organization.contact_email}</h4>
                <Link to="/">
                    <button type="button">Back to Home</button>
                </Link>
                {eventList}

            </div>
        )
    }
}