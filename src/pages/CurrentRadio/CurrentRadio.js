import React, {useState} from 'react';

import './CurrentRadio.css'

const curret = {imgUrl: "https://source.unsplash.com/random/401x400", name: "Name 0"}

const list = [{imgUrl: "https://source.unsplash.com/random/400x400", name: "Name 1"},
{imgUrl: "https://source.unsplash.com/random/400x401/?city", name: "Name 2"},
{imgUrl: "https://source.unsplash.com/random/400x402/?city", name: "Name 3"},
{imgUrl: "https://source.unsplash.com/random/400x403/?city", name: "Name 3"},
{imgUrl: "https://source.unsplash.com/random/400x404/?city", name: "Name 4"},
{imgUrl: "https://source.unsplash.com/random/400x405/?city", name: "Name 5"},
{imgUrl: "https://source.unsplash.com/random/400x406/?city", name: "Name 6"},
{imgUrl: "https://source.unsplash.com/random/400x407/?city", name: "Name 7"},
{imgUrl: "https://source.unsplash.com/random/400x408/?city", name: "Name 8"},
{imgUrl: "https://source.unsplash.com/random/400x409/?city", name: "Name 9"},
{imgUrl: "https://source.unsplash.com/random/400x400/?city", name: "Name 10"}]

export default function CurrentRadio() {
    return(
        <div className="CurrentRadio">

            <div className="CurrentProgram">
                <img src={curret.imgUrl} alt=""/>
                <strong>{curret.name}</strong>
            </div>
            <strong>A seguir</strong>
            <div className="HorizontalList">
                {
                    list.map( (item, index) =>
                        <div className="Item" key={index}>
                            <img src={item.imgUrl} alt=""/>
                            <p>{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}