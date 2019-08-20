import React, { Component } from 'react'
import NewOrgForm from './NewOrgForm';
import AllOrgs from './AllOrgs';
import { Redirect } from 'react-router-dom'


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
    handleHideNewForm = (evt) => {
        this.setState({ isNewOrgFormDisplayed: false })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/organizations' />
        }
        return (
            <div className='volwrapper'>
                <div className='org-quote'>
                    <h3>"Life's most persistent and urgent question is, what are you doing for others?"</h3>
                    <h4> - Martin Luther King, Jr.</h4>
                </div>
                <h2>Organizations</h2>
                <div className="main-org-div">
                    <div className='form-toggle'>
                        {
                            this.state.isNewOrgFormDisplayed
                                ?
                                <div className='newformarea'>
                                <NewOrgForm />
                                <button onClick={this.handleHideNewForm}>Cancel</button>
                                </div>
                                :
                                <div className='create-org-button'>

                                    {/* <div> */}
                                    <h3>Add your organization</h3>
                                    <button onClick={this.handleShowNewForm}>Create an Organization</button>
                                    {/* </div> */}
                                </div>
                        }
                    </div>

                <div>
                </div>
                <AllOrgs />
                </div>
            </div>
        )
    }
}
