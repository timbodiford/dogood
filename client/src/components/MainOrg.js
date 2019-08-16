import React, { Component } from 'react'
import NewOrgForm from './NewOrgForm';
import AllOrgs from './AllOrgs';
import {Redirect} from 'react-router-dom'


export default class MainOrg extends Component {

    state = {
        redirectToHome: false,
        isNewOrgFormDisplayed: false
    }

    componentDidMount() {
        this.setState({ isNewOrgFormDisplayed: false })
    }

    handleShowNewForm = (evt) => {
        this.setState({ isNewOrgFormDisplayed: true })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/organizations' />
        }
        return (
            <div>
                <h1>This will be the Main org component</h1>
                {
                    this.state.isNewOrgFormDisplayed
                    ?
                    <NewOrgForm />
                    
                    :
                    <div>
                    <button onClick={this.handleShowNewForm}>Create an Organization</button>
                    <p>Click here to add a new org</p>
                    <AllOrgs />
                    </div>
                }
            </div>
        )
    }
}
