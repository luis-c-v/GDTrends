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
                <div className='sound' style={{ "background": 'blue' }}>
                    {/* <button className='play' onClick={playSound(sounds.url)}>
                        <span className='icon-ic_global_play_dark mr-1'>play1</span>
                    </button> */}
                </div>
                <div className='sound' style={{ "backgroundColor": 'red' }}>
                    play2
                </div>
                <div className='sound' style={{ "backgroundColor": 'green' }}>
                    play3
                </div>
                <div className='sound' style={{ "backgroundColor": 'yellow' }}>
                    play4
                </div>
                <div className='sound' style={{ "backgroundColor": 'purple' }}>
                    play5
                </div>
                <div className='sound' style={{ "backgroundColor": 'orange' }}>
                    play6
                </div>
                <div className='sound' style={{ "backgroundColor": 'pink' }}>
                    play7
                </div>
                <div className='sound' style={{ "backgroundColor": 'brown' }}>
                    play8
                </div>
            </div>
        </div>
    )
};

export default Sounds;