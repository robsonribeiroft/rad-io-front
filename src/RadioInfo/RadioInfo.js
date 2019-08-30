import React from 'react';
import infoImg from '../assets/infoButtonRounded.svg'
import './RadioInfo.css'

export default function RadioInfo() {
    return(
        <div className='container'>
            <div className='content'>
                <p style={{fontSize: '40px',}}>Universitária</p>
                <p>FM 107.9</p>
            </div>
            
            <div style={{display: 'flex', flex: 1}}>
                <img src={infoImg} alt='info' width='18px' height='18px' />
            </div>
        </div>
    )
}
