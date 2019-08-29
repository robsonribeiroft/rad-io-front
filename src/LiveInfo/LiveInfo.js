import React, { useState } from 'react';
import './LiveInfo.css'
import noteImg from '../assets/musicNote.svg'
import playImg from '../assets/playButtonRounded.svg'
import pauseImg from '../assets/pauseButtonRounded.svg'

export default function LiveInfo(){

    const [playing, setPlaying] = useState(false)

    const togglePlay = () => {
        const audio = document.getElementById('stream')
        playing ? audio.pause() : audio.play()
        setPlaying(!playing)
        
    }

    return(
        <div className='container'>
            
            <button onClick={togglePlay}>
                <audio id='stream' hidden loop src="http://200.129.35.230:8081/;"></audio>
            
                <img src={playing ? pauseImg : playImg} alt='button' width='80px' height='80px'/> 
            </button>

            <div className='content'>

                <img src={noteImg} alt='note'  width='35px' height='35px'/>
                <p>Encontro com o Blues</p>

            </div>
        </div>
    )
}