import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { CrearChar } from '../pages/CrearChar';
import { CharDetail } from '../pages/CharDetail';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/characters/create" component={CrearChar}/>
                    <Route exact path="/characters/:id" component={CharDetail}/>
                </Switch>
            </div>
        </Router>
    )
}