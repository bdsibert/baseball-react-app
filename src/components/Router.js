import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import Stat from "./Stat";

import App from"../App";

const Router = () => (
    <HashRouter basename="/">
    <Switch>
    <Route path="/" component={App} exact/>
    <Route path="/stat/:id" component={Stat}/>
    </Switch>
    </HashRouter>
);

export default Router;
