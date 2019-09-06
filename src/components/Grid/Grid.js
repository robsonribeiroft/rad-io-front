import React, {useState} from 'react'
import ProgramDetail from '../ProgramDetail/ProgramDetail'
import ProgramList from '../ProgramsList/ProgramsList'

export default function Grid() {

    const [program, setProgram] = useState("Sem valor")

    return(
        <div className="GridSection">
            <ProgramDetail currentProgram={program} className="pgDetail"/>
            <ProgramList triggerProgram={setProgram} className="pgList"/>
        </div>
    )
    
}