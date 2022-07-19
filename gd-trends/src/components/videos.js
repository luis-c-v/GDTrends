import React from 'react';
import '../styles/videos.css';
import { TikTok } from "react-tiktok";

// get videos from API here in list
// const videoList = []

const Videos = () => {
    return (
        <div>
            <div className='video-container'>
                <div className='title'>
                    Video Content
                </div>
                <div className='display-container'>
                    <TikTok url='https://www.tiktok.com/@satelliteacc/video/7121696990173449478' />
                    <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
                    <TikTok url='https://www.tiktok.com/@satelliteacc/video/7121696990173449478' />
                </div>
            </div>
        </div>
    )
}

export default Videos