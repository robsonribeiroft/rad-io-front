import React from 'react'
import RadioInfo from './components/RadioInfo/RadioInfo'
import LiveInfo from './components/LiveInfo/LiveInfo'
import Player from './components/Player/Player'
import Grid from './components/Grid/Grid'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="PlayerSection">
        <RadioInfo />
        <div className='slogan'><p>A SINTONIA DA TERRA</p></div>
        <Player/>
        <LiveInfo style={{ alignSelf: 'flex-end', }}/>
      </div>
      <Grid/>
    </div>
  );
}
