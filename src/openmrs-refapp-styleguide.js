import singleSpaReact from "single-spa-react";

import "./load-css.js";
import "@openmrs/style-referenceapplication/lib/referenceapplication.css";
import "./variables.css";
import "./custom.css";
import "./refapp-patient-chart.css"

const lifecycles = singleSpaReact();
  
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
