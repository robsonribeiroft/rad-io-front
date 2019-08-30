import React from 'react'
import RadioInfo from './RadioInfo/RadioInfo'
import LiveInfo from './LiveInfo/LiveInfo'
import Player from './Player/Player'
import './App.css'

export default function App() {
  return (
    <div className="App">

      <RadioInfo />
      <div className='slogan'><p>A SINTONIA DA TERRA</p></div>
      <Player/>
      <LiveInfo style={{ alignSelf: 'flex-end', }}/>
    </div>
  );
}
