import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Register the service worker for PWA functionality
// This enables caching, offline support, and app installation on devices
serviceWorker.register();
