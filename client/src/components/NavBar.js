import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class NavBar extends Component {
    render() {
        return (

            <div className='nav'>

                <h1 className="sitename">DO GOOD</h1>
                <div >
                    <div className="nav-wrapper" >
                        <div className='nav-buttons'>
                            <Link style={{textDecoration: 'none'}} to="/organizations">
                                <a  className='navlink' type="text">ORGANIZATIONS</a>
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
