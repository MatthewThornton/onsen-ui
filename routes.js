import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App";
import About from "./containers/About";

// NOTE: HashRouter is required for Cordova setups. Don't use BrowserRouter
export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
            </Switch>
        </HashRouter>
    )
}