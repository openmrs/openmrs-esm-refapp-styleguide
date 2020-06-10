import "./set-public-path.js";

function setupOpenMRS() {
    return {
      lifecycle: () => import("./openmrs-refapp-styleguide"),
      activate: "",
    };
  }
  
  export { setupOpenMRS };