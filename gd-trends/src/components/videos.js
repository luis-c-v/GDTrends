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
                <div className='grid-container'>
                    <div className='video'>
                        <TikTok url='https://www.tiktok.com/@satelliteacc/video/7121696990173449478'/>
                    </div>
                    <div className='video'>
                        <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
                    </div>
                    <div className='video' style={{ backgroundColor: 'red' }}>
                        three
                    </div>
                    <div className='video' style={{ backgroundColor: 'yellow' }}>
                        four
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos