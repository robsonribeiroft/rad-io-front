import React from 'react';
import noteImg from '../assets/musicNote.svg'
import './LiveInfo.css'

export default function LiveInfo(){

    return(
        <div className='content'>

            <img src={noteImg} alt='note'/>
            <p>Encontro com o Blues</p>

        </div>
    )
}