import React, { Component } from 'react'
import axios from 'axios'

export default class EditOrg extends Component {

    state = {
        organization: {}
    }
    componentDidMount() {
        this.getAllOrgs()
    }

    getOrg = () => {
        axios.get(`/api/v1/organizations/${this.props.match.params.orgId}/`)
            .then((res) => {
                this.setState({ organization: res.data })
            })
    }

    handleEdit = (event) => {
        event.preventDefault()

        axios.put(`/api/products/${this.state.organization.id}`, this.state.product)
            .then((res) => {
                this.setState({
                    user: res.data,
                    isEditFormDisplayed: false
                })

            })
    }


    render() {
        return (
            <div>
                    <h1>This component should show the edit form for orgs</h1>

            </div>
        )
    }
}
