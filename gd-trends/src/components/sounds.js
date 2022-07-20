import React from 'react';
import '../styles/sounds.css';
import { FaPlay } from 'react-icons/fa';
const soundTest = '.../public/mixkit-arcade-retro-game-over-213.wav';
// const play_icon = '.../public/play_button.html';

// const sounds = []
function playSound(songUrl) {
    new Audio(songUrl).play();
    //alert('you played this song already!');
};

function playSound2() {
    //new Audio('https://soundcloud.com/nivelcodiciado/una-linda-mujer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing').play();
    let audio = new Audio(soundTest);
    return audio.play();
};

const Sounds = () => {
    return (
        <div>
            <div className='sound-container'>
                <div className='title'>Popular Sounds</div>
                <div className='sounds-container'>
                    {/* {sounds.map((sound) => (
                        <div className='sound' onclick='playSound(sounds.url)>Play</div>
                    ))} */}
                    <div className='sound' style={{"background-color": 'blue'}}>
                        <button className='play' onClick={playSound('https://soundcloud.com/nivelcodiciado/una-linda-mujer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')}>
                            <FaPlay/>
                        </button>
                        <text className='text'> 
                            <i>Love You So:</i> The King Khan
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'red'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text2'> 
                            <i>Monkeys Spinning Monkeys:</i> Kevin Macleod
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'yellow'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text2'> 
                            <i>Cumbia Buena:</i> Grupo La Cumbia
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'green'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text'> 
                            <i>Rich Minion:</i> Yeat
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'purple'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text'> 
                            <i>Funny Song:</i> Cavendish Music
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'orange'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text2'> 
                            <i>Shootout:</i> Izzamuzzic
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'pink'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text2'> 
                            <i>Dame Tu Cosita:</i> El Chombo
                        </text>
                    </div>
                    <div className='sound' style={{"background-color": 'brown'}}>
                        <button className='play' onClick={playSound2}>
                            <FaPlay/>
                        </button>
                        <text className='text'> 
                            <i>Cool Kids (Sped-up Version):</i> Echosmith
                        </text>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sounds;