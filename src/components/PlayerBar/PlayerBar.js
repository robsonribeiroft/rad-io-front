import React, { useState } from 'react'
import playImg from '../../assets/playButtonRounded.svg'
import pauseImg from '../../assets/pauseButtonRounded.svg'
import './PlayerBar.css'

export default function PlayerBar() {

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

            <div className="liveInfo">
                <p>Universitária 107.9</p>
                <p className="subLiveInfo">ao vivo</p>
            </div>
        </div>
    )
}