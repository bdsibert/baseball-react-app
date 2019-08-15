import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Stat from "./Stat";

import App from"../App";

const Router = () => (
    <BrowserRouter basename="/">
    <Switch>
    <Route path="/" component={App} exact/>
    <Route path="/stat/:id" component={Stat}/>
    </Switch>
    </BrowserRouter>
);

export default Router;
