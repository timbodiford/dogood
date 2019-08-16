import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import ViewOrg from './ViewOrg';

export default class NewOrgForm extends Component {
    
    state = {
        newOrg: {
            org_name: '',
            contact_person: '',
            contact_phone: '',
            contact_email: ''
        },
        redirectToHome: false
    }

    handleChange = (evt) => {
        let copiedOrg = { ...this.state.newOrg }
        copiedOrg[evt.target.name] = evt.target.value
        this.setState({ newOrg: copiedOrg })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/v1/organizations/', this.state.newOrg)
        .then(() => {
            this.setState({ redirectToHome: true })
        })
    }

    render() {
        if(this.state.redirectToHome) {
        return <Redirect to={<ViewOrg />} />
        }
        return (
            <div>
                <h2>Add New Organization</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="org-name">Name of Organization: </label>
                        <input type="text" name="org_name" id="org-name" onChange={this.handleChange} value={this.state.newOrg.org_name} />
                    </div>
                    <div>
                        <label htmlFor="contact-person">Contact Name: </label>
                        <input type="text" name="contact_person" id="contact-person" onChange={this.handleChange} value={this.state.newOrg.contact_person} />
                    </div>
                    <div>
                        <label htmlFor="contact-phone">Phone #: </label>
                        <input type="text" name="contact_phone" id="contact-phone" onChange={this.handleChange} value={this.state.newOrg.contact_phone} />
                    </div>
                    <div>
                        <label htmlFor="contact-email">Email Address: </label>
                        <input type="text" name="contact_email" id="contact-email" onChange={this.handleChange} value={this.state.newOrg.contact_email} />
                    </div>

                    <input type="submit" value="Create" />
                </form>

            </div>
        )
    }
}
