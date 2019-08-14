import React, { Component } from 'react'
import axios from 'axios'


export default class ViewOrg extends Component {

    state = {
        organization: {
        }
    }

    componentDidMount() {
        this.getOrg()
    }

    getOrg = () => {
        axios.get(`/api/v1/organizations/${this.props.match.params.id}/`)
        .then((res) => {
            this.setState({organization: res.data})
        })
    }

    render() {
        return (
            <div>
                    {/* <h1>This component should show the individual org</h1> */}
                <h4>{this.state.organization.org_name}</h4>
                <h4> {this.state.organization.contact_person}</h4>
                <h4>{this.state.organization.contact_phone}</h4>
                <h4>{this.state.organization.contact_email}</h4>
            </div>
        )
    }
}
