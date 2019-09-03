import React from 'react'
import './ProgramList.css'


export default function ProgramsList() {

    const list = ['Program Radio A', 'Program Radio B', 
            'Program Radio C', 'Program Radio D', 
            'Program Radio E', 'Program Radio F', 
            'Program Radio G', 'Program Radio H', ]

    return(
        <div className="programList">
            {list.map( item =>
                <p className="itemList" key={item}>{item}</p>
            )}
        </div>
    )
}