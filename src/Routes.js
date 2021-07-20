import React from 'react'
import { Switch, Route } from 'react-router-dom'
//vistas que mostrare
import {Home} from './app/views'
import Auth from './app/views/auth/Auth'


//es tonto por que solo recibe parametros
const Routes =()=>( //el arrowfunction tiene implicito el return
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/signup" component={Auth}/>
            <Route exact path="/campus" component={()=><h1>este es mi campus</h1>}/>
    </Switch>
)


export default Routes