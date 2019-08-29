import React, { useState, useEffect } from 'react';
import './LiveInfo.css'
import noteImg from '../assets/musicNote.svg'
import playImg from '../assets/playButtonRounded.svg'
import pauseImg from '../assets/pauseButtonRounded.svg'

export default function LiveInfo(){

    const useAudio = () => {
        const url = "http://200.129.35.230:8081/"
        const [audio] = useState(new Audio(url))
        const [playing, setPlaying] = useState(false)

        const toggle = () => { setPlaying(!playing) }

        useEffect( () => {
            playing ? audio.pause() : audio.play()
        },
        [playing]
        )

        return [playing, toggle]
    }

    const [playing, toggle] = useAudio()

    return(
        <div className='container'>
            
            <button onClick={toggle}>
                <img src={playing ? pauseImg : playImg} alt='button' width='80px' height='80px'/> 
            </button>

            <div className='content'>

                <img src={noteImg} alt='note'  width='35px' height='35px'/>
                <p>Encontro com o Blues</p>

            </div>
        </div>
    )
}