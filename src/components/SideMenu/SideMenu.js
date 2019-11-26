import React from 'react'

import playImg from '../../assets/playButtonRounded.svg'

import './SideMenu.css'

export default function SideMenu() {

    const menuItems = [ {img: playImg, text: "menu item 1"},
    {img: playImg, text: "menu item 2"},
    {img: playImg, text: "menu item 3"},
    {img: playImg, text: "menu item 4"},
    {img: playImg, text: "menu item 5"}]

    return(
        <div className="SideMenu">
            {
                menuItems.map((item, index)=>
                    <div className="ItemMenu" key={index}> 
                        <img src={item.img} alt=""/>
                        <p>{item.text}</p>
                    </div>
                )
            }
        </div>
    )
    
}