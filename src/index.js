import "./set-public-path.js";

import "./load-css.js";
import "@openmrs/style-referenceapplication/lib/referenceapplication.css";
import "./variables.css";
import "./custom.css";
import "./overrides/patient-chart.css"


function setupOpenMRS() {
    return {
      lifecycle: () => Promise.resolve(),
      activate: () => false,
    };
  }
  
  export { setupOpenMRS };