import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div className='banner-area'>
                <div className='banner-spacer'>
                    <a className='link-for-tiles' href='/organizations'>
                        <div className='home-tiles'>
                            <h1 className='tile-header'>ORGANIZATIONS</h1>
                            <p>There will be an image here</p>

                        </div>
                    </a>
                    <a className='link-for-tiles' href='/volunteers'>
                        <div className='home-tiles'>
                            <h1 className='tile-header'>VOLUNTEERS</h1>
                            <p>There will be an image here</p>
                            <p>And maybe a tile discussing orgs</p>
                            <p>And maybe a tile discussing volunteers</p>
                        </div>
                    </a>
                </div>

                <img className='home-banner' alt="" src='https://cdn.pixabay.com/photo/2017/02/10/12/12/volunteer-2055043_1280.png' />
            </div>
        )
    }
}


