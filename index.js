import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Page, Toolbar, Splitter, SplitterContent, SplitterSide } from "react-onsenui"; 

// TODO fix styles loader. Currently using url links to styles.
// import "./styles";

// main routes
import AppRoutes from "./routes";
import store from "./store";

ReactDOM.render(
    <Page>
        <Toolbar>
            <div className="center">My title</div>
        </Toolbar>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </Page>,
    document.getElementById("app")
)