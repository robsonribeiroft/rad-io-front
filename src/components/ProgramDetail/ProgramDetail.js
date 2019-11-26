import React from 'react'
import './ProgramDetail.css'

export default function ProgramDetail({count}){
    
    return(
        <div className="programDetail">
            <p className="name">{count}</p>
            <p>Terça e quinta – 21h às 22h</p>
            <p>O programa apresenta repertório voltado exclusivamente para o Blues,
                 além de trazer informações e notícias relacionadas ao tema.</p>
            <p>Produção: Alexandre Rocha, Roberto Lessa e Robério Lessa</p>
            <p>Apresentação: Roberto e Robério Lessa</p>
        </div>
    )
}