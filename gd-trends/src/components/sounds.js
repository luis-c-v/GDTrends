import React from 'react';
import '../styles/sounds.css';

// const sounds = []

const Sounds = () => {
    return (
        <div>
            <div className='sound-container'>
                <div className='title'>Popular Sounds</div>
                <div className='grid-container'>
                    <div className='sound' style={{"background-color": 'blue'}}>
                        play1
                    </div>
                    <div className='sound' style={{"background-color": 'red'}}>
                        play2
                    </div>
                    <div className='sound' style={{"background-color": 'green'}}>
                        play3
                    </div>
                    <div className='sound' style={{"background-color": 'yellow'}}>
                        play4
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sounds;