import React from 'react'
import './ProgramList.css'


export default function ProgramsList(props) {

    const [triggerProgram] = props

    const list = ['Program Radio A', 'Program Radio B', 
            'Program Radio C', 'Program Radio D', 
            'Program Radio E', 'Program Radio F', 
            'Program Radio G', 'Program Radio H', ]

    return(
        <div className="containerPgList">
            
            <div className="programList">
            {list.map( item =>
                <p onClick={()=>triggerProgram(item)} className="itemList" key={item}>{item}</p>
            )}
        </div>
        </div>
        
    )
}