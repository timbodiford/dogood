import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import ViewOrg from './ViewOrg';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
        return <Redirect to='/organizations'/>
        }
        return (
            <div className='formboxes'>
                <h3>Add New Organization</h3>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="org_name"
                        label="Name of Organization:"
                        name="org_name"
                        onChange={this.handleChange}
                        value={this.state.newOrg.org_name}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="contact_person"
                        label="Contact Name:"
                        name="contact_person"
                        onChange={this.handleChange}
                        value={this.state.newOrg.contact_person}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="contact_phone"
                        label="Phone #:"
                        name="contact_phone"
                        onChange={this.handleChange}
                        value={this.state.newOrg.contact_phone}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="contact_email"
                        label="Email Address:"
                        name="contact_email"
                        onChange={this.handleChange}
                        value={this.state.newOrg.contact_email}
                        margin="normal"
                        variant="outlined"
                    />
                    {/* <Button variant="contained" type="submit">Add Prg</Button> */}
                    <input type="submit" value="Add Org" />
                </form>

            </div>
        )
    }
}
