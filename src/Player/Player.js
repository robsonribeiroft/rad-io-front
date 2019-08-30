import React, { useState } from 'react'
import playImg from '../assets/playButtonRounded.svg'
import pauseImg from '../assets/pauseButtonRounded.svg'
import './Player.css'

export default function Player() {

    const [playing, setPlaying] = useState(false)

    const togglePlay = () => {
        const audio = document.getElementById('stream')
        playing ? audio.pause() : audio.play()
        setPlaying(!playing)   
    }

    return(
        <div>
            {/* <object id="mediaplayer" classid="clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#version=5,1,52,701" standby="loading microsoft windows media player components..." type="application/x-oleobject" width="320" height="310">
                <param name="showcontrols" value="true"/>
                <embed src="mms://streaming.al.ce.gov.br:4025;" autostart="true" showcontrols="true" showstatusbar="1" bgcolor="white" width="320" height="310"/>
            </object> */}
            <button onClick={togglePlay}>
                <audio id='stream' hidden loop src="http://200.129.35.230:8081/;"></audio>
                <img src={playing ? pauseImg : playImg} alt='button'/> 
            </button>
        </div>
            
    )

}