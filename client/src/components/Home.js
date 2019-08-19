import React, { Component } from 'react'
import AllOrgs from './AllOrgs';
import AllVolunteers from './AllVolunteers';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div className='banner-area'>
                <img className='home-banner' src='https://cdn.pixabay.com/photo/2017/02/10/12/12/volunteer-2055043_1280.png' />
                <div className='banner-spacer'>
                    <div className='home-tiles'>
                        <h1>This should be the Org Area</h1>
                        <p>There will be an image here</p>
                        <p>And maybe a tile discussing orgs</p>
                        <p>And maybe a tile discussing volunteers</p>
                    </div>
                    <div className='home-tiles'>
                        <h1>This should be the Volunteer container</h1>
                        <p>There will be an image here</p>
                        <p>And maybe a tile discussing orgs</p>
                        <p>And maybe a tile discussing volunteers</p>
                    </div>
                </div>

            </div>
        )
    }
}


