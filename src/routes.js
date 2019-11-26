import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import CurrentRadio from './pages/CurrentRadio/CurrentRadio'
import About from './pages/About/About'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={About}/>
                <Route path="/live" component={CurrentRadio}/>
            </Switch>
        </BrowserRouter>
    )
}