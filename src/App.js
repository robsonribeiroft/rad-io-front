import React from 'react'

import PlayerBar from './components/PlayerBar/PlayerBar'
import SideMenu from './components/SideMenu/SideMenu'
import Routes from './routes'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <SideMenu className="SideMenu"/>

      <div className="MainContainer">
        {
          <Routes className="RouteBody"/>
        }
        
      
        <PlayerBar className="PlayerBar"/>
      </div>
      
    </div>
  );
}
