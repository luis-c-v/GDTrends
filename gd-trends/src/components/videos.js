import React from 'react';
import '../styles/videos.css';

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
                    <div className='video' style={{"background-color": 'blue'}}>
                        one
                    </div>
                    <div className='video' style={{"background-color": 'red'}}>
                        two
                    </div>
                    <div className='video' style={{"background-color": 'green'}}>
                        three
                    </div>
                    <div className='video' style={{"background-color": 'yellow'}}>
                        four
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos