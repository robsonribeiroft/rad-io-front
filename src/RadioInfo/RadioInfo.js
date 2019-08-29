import React from 'react';
import './RadioInfo.css'
import infoImg from '../assets/infoButtonRounded.svg'

const styleSheet = {
    display: 'flex',
    flex: 1,
    paddingTop: '15px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    verticalAlign: 'top',
    flexDirection: 'row',
}

const contentStyle = {  
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-end', 
    flex: 1,
    fontFamily: 'Trocchi',
}

export default function RadioInfo() {
    return(
        <div style={styleSheet}>
            <button>
                <div style={ contentStyle }>
                    <p style={{fontSize: '40px',}}>Universitária</p>
                    <p>FM 107.9</p>
                </div>
            </button>
            
            <div style={{display: 'flex', flex: 1}}>
                <img src={infoImg} alt='info' width='18px' height='18px' />
            </div>
        </div>
    )
}
