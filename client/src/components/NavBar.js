import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1>DoGood logo</h1>
                </Link>
                <h1>This will be the NAV Bar</h1>

                <Link to="/organizations">
                    <button type="button">Organizations</button>
                </Link>

                <Link to="/volunteers">
                    <button type="button">Volunteers</button>
                </Link>

            </div>
        )
    }
}
