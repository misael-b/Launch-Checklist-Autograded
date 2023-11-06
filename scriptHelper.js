// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
                 
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
     const copilotSection = document.getElementById("copilotStatus")
     const div = document.getElementById("faultyItems") 
     const launchStatus = document.getElementById("launchStatus")
     const fuelStatus = document.getElementById("fuelStatus")
     const cargoStatus = document.getElementById("cargoStatus")

     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
         alert("All fields are required");
         div.style.visibility = "hidden";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         event.preventDefault();
     } else if (validateInput(pilot) != "Not a Number" || validateInput(copilot) != "Not a Number") {
         alert("Please Enter A Valid Name!!!");
         div.style.visibility = "hidden";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         event.preventDefault();
     } else if (validateInput(fuelLevel) != "Is a Number" || validateInput(cargoLevel) != "Is a Number") {
         alert("Please Enter a Numerical Number!!!");
         div.style.visibility = "hidden";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         event.preventDefault();
     } else {
         pilotSection.innerHTML = `Pilot ${pilot} is ready for launch`
         copilotSection.innerHTML = `Co-pilot ${copilot} is ready for launch`
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
 }
 
async function myFetch() {
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    return await planetsReturned.json();
 }
 
function pickPlanet(planets) {
    randomNum = Math.floor(Math.random() * planets.length);
    return planets[randomNum]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;