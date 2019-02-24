import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
/*libs Start*/
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle.js";
/*libs End*/

import "./scss/style.scss";
/*jquery custom files Start*/
import "./jquery/devDashboard";
import "./jquery/home";
import "./jquery/broadcast";
/*jquery custom files End */

/*js custom files start*/

import "./jquery/settings";
/*js custom files end*/
import "./redux/store";

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<AppWithStore />, document.getElementById("root"));
