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
                    <div className='org-list'>
                        {organization.org_name}

                    </div>
                </Link>
            )
        })
        return (
            <div>
                <h3>Currently participating organizations:</h3>
                <div className='org-list'>
                    {orgList}
                </div>
            </div>
        )
    }
}
