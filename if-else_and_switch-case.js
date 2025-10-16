let browserName = "Chrome"
if(browserName == 'Chrome1') {
    console.log("Launching Chrome browser..")
} else {
    console.log("Launching Default browser..")
}

let testType = "sanity"
switch(testType) {
    case "smoke":
        console.log("Running Smoke Tests...")
        break;
    case "sanity":
        console.log("Running Sanity Tests...")
        break;
    case "regression":
        console.log("Running Regression Tests...")
        break;
    default:
        console.log("No Tests was run...")
        break;
}

