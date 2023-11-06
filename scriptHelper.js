// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput.length === 0) {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     const pilotSection = document.getElementById("pilotStatus") 
     pilotSection.innerHTML = `Pilot ${pilot} is ready for launch`
     const copilotSection = document.getElementById("copilotStatus")
     copilotSection.innerHTML = `Co-pilot ${copilot} is ready for launch)`
     const div = document.getElementById("faultyItems") 
     const launchStatus = document.getElementById("launchStatus")
     const fuelStatus = document.getElementById("fuelStatus")
     const cargoStatus = document.getElementById("cargoStatus")

     launchStatus.innerHTML = "Shuttle is Ready for Launch";
     launchStatus.style.color = "green";
     fuelStatus.innerHTML = "Fuel level high enough for launch";
     cargoStatus.innerHTML = "Cargo mass low enough for launch";


    if (fuelLevel < 10000) {
        div.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";

     }
     if (cargoLevel > 10000) {
        div.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";

    }  
     
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;