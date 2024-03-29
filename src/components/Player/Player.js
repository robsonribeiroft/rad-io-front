import React, { useState } from 'react'
import playImg from '../../assets/playButtonRounded.svg'
import pauseImg from '../../assets/pauseButtonRounded.svg'
import './Player.css'

export default function Player() {

    const [playing, setPlaying] = useState(false)

    const togglePlay = () => {
        const audio = document.getElementById('stream')
        playing ? audio.pause() : audio.play()
        setPlaying(!playing)   
    }

    return(
        <div className="playerBar">
            <button onClick={togglePlay}>
                <audio id='stream' hidden loop src="http://200.129.35.230:8081/;"></audio>
                <img src={playing ? pauseImg : playImg} alt='button'/> 
            </button>
        </div>
            
    )

}