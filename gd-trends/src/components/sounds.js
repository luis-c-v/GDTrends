import React from 'react';
import '../styles/sounds.css';

// const sounds = []
function playSound(songUrl) {
    new Audio(songUrl).play()
};

const Sounds = () => {
    return (
        <div className='sound-container'>
            <div className='title'>Popular Sounds</div>
            <div className='sounds-container'>
                <div className='sound' style={{ "background-color": 'blue' }}>
                    <button className='play' onclick='playSound(sounds.url)'>
                        <span class='icon-ic_global_play_dark mr-1'>play1</span>
                    </button>
                </div>
                <div className='sound' style={{ "background-color": 'red' }}>
                    play2
                </div>
                <div className='sound' style={{ "background-color": 'green' }}>
                    play3
                </div>
                <div className='sound' style={{ "background-color": 'yellow' }}>
                    play4
                </div>
                <div className='sound' style={{ "background-color": 'purple' }}>
                    play5
                </div>
                <div className='sound' style={{ "background-color": 'orange' }}>
                    play6
                </div>
                <div className='sound' style={{ "background-color": 'pink' }}>
                    play7
                </div>
                <div className='sound' style={{ "background-color": 'brown' }}>
                    play8
                </div>
            </div>
        </div>
    )
};

export default Sounds;