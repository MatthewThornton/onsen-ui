import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Page, Toolbar, Splitter, SplitterContent, SplitterSide } from "react-onsenui"; 

// TODO fix styles loader. Currently using url links to styles.
// import "./styles";
import NavBar from "./components/NavApp";
// main routes
import AppRoutes from "./routes";
import store from "./store";

ReactDOM.render(
    <Page renderToolbar={() => <NavBar backButton={true} title={`Title ${name}`} />}>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </Page>,
    document.getElementById("app")
)