import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllOrgs extends Component {

    state = {
        organizations: []
    }
    componentDidMount() {
        this.getAllOrgs()
    }

    getAllOrgs = () => {
        axios.get('api/v1/organizations/')
        .then((res) => {
            this.setState({ organizations: res.data })
        })
    }

    render() {
        let orgList = this.state.organizations.map((organization) => {
            return (
                <Link to={`organizations/${organization.id}`}>
                    <div>
                        {organization.org_name}
                    
                    </div>
                </Link>
            )
        })
        return (
            <div>
                    <h1>This component should show all orgs</h1>
                {orgList}
            </div>
        )
    }
}
