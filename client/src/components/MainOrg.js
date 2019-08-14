import React, { Component } from 'react'
import NewOrgForm from './NewOrgForm';
import AllOrgs from './AllOrgs';

export default class MainOrg extends Component {
    render() {
        return (
            <div>
                    <h1>This will be the Main org component</h1>
            <NewOrgForm />
            <AllOrgs />
            </div>
        )
    }
}
