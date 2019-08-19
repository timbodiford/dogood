import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <div className='nav'>
                {/* <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img className="logo" src="https://www.cfasociety.org/westmichigan/PublishingImages/Pages/VolunteerOpportunities/Volunteer.png" />                </Link>
                </div> */}
                <h1 className="sitename">DO GOOD</h1>
                <div >
                    <div className='nav-buttons'>
                        <Link to="/organizations">
                            <button className='navlink' type="button">Organizations</button>
                        </Link>

                        <Link  to="/volunteers">
                            <button className='navlink' type="button">Volunteers</button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
