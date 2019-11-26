import React from 'react'
import RadioInfo from '../RadioInfo/RadioInfo'
import CurrentRadio from '../CurrentRadio/CurrentRadio'

import './PlayerSection.css'

export default function PlayerSection() {
    return(
        <div className="PlayerSection">
            <RadioInfo />
            <strong>A SINTONIA DA TERRA</strong>
            <CurrentRadio/>
        </div>
    )
}