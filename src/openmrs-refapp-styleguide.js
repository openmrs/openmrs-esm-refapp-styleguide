import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

// import "./load-css.js";
import "@openmrs/style-referenceapplication/lib/referenceapplication.css";
import "./variables.css";
import "./custom.css";
import "./refapp-patient-chart.css"

function Root(props){
    return "";
}

const { bootstrap, mount, unmount } = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Root
  });
  
export { bootstrap, mount, unmount };