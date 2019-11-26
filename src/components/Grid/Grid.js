import React, {useState} from 'react'
import ProgramDetail from '../ProgramDetail/ProgramDetail'
import ProgramList from '../ProgramsList/ProgramsList'

export default function Grid() {

    const [count, setCount] = useState(0)

    return(
        <div className="GridSection">
            <ProgramDetail className="pgDetail" count={count}/>
            <ProgramList className="pgList" count={count} increaseCount={(count) => setCount({count})}/>
        </div>
    )
    
}