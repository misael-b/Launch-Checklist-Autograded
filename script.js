// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        
        alert("All fields are required!")
        event.preventDefault();
        // let pilotName = document.querySelector("input[name=pilotName]");
        // let copilotName = document.querySelector("input[name=copilotName]");
        // let fuelLevel = document.querySelector("input[name=fuelLevel]")
        // let cargoMass = document.querySelector("input[name=cargoMass]")
        // if (pilotName.value === "" || pilotName.value === "") {
        //     //alert("All fields are required!");
        //     // stop the form submission
        //     event.preventDefault();
        
        // }
    })
    
 });