import * as React from "react";
import * as ReactDOM from "react-dom";

import Main from "./Main";
import {configureStore} from "./store";

import "../stylesheets/styles.scss";

ReactDOM.render(
    <Main store={configureStore()} />,
    document.getElementById("app"),
);
