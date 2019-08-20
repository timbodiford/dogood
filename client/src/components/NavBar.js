import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class NavBar extends Component {
    render() {
        return (

            <div className='nav'>

                <a href='/' className="sitename">DO GOOD</a>
                <div >
                    <div className="nav-wrapper" >
                        <div className='nav-buttons'>
                            <Link style={{textDecoration: 'none'}} to="/organizations">
                                <a className='navlink' type="text">ORGANIZATIONS</a>
                            </Link>
                        </div>
                        <div className='nav-buttons'>
                            <Link to="/volunteers" style={{textDecoration: 'none'}} >
                                <a className='navlink' type="text">VOLUNTEERS</a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
