import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Ons from "react-onsenui"; 

// main routes
import AppRoutes from "./routes";
import store from "./store";

ReactDOM.render(
    <Ons.Page>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </Ons.Page>,
    document.getElementById("app")
)