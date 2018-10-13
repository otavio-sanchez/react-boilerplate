import React from 'react'
import { Switch, Route } from 'react-router'

const Main = (props) => (
    <main>
        <Switch>
            {
                props.routes.map((route, index) => (
                    <Route  {...route} key={index} /> 
                ))
            }
        </Switch>
    </main>
)

export default Main
