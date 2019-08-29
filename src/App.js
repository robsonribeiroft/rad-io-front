import React from 'react';
import backgroundImg from '../src/assets/backgroundImg.jpg'
import RadioInfo from './RadioInfo/RadioInfo'
import InfoLive from './LiveInfo/LiveInfo'
import './App.css'

const styleApp = {
  display: 'flex',
  flexDirection: 'column',
  
  alignItems: 'center',
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: 'bottom',
  backgroundRepeate: 'no-repeat',
  backgroundSize: 'cover',
}


export default function App() {
  return (
    <div className="App" style={ styleApp }>

      <RadioInfo />
      <div style={{display: 'flex', flex: 2,   flexDirection: 'column', 
    justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Anton',
  paddingTop: '200px',
  fontSize: '80px',}}><p>A SINTONIA DA TERRA</p></div>
      <InfoLive style={{ alignSelf: 'flex-end', }}/>
    </div>
  );
}
