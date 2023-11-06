// Write your JavaScript code here!

window.addEventListener("load", function() {

    const form = this.document.querySelector('form');

    form.addEventListener("submit", function (event) {
        
        let userPilotName = document.getElementById("pilotName").value; 
        let userCopilotName = document.querySelector("input[name=copilotName]").value;
        let userFuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let userCargoMass = document.querySelector("input[name=cargoMass]").value;
        let list;

        formSubmission(document, list, userPilotName, userCopilotName, userFuelLevel, userCargoMass)
        event.preventDefault();
    });
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanetsResponse);
        let planetName = planet.name;
        let planetDiameter = planet.diameter;
        let planetStar = planet.star; 
        let planetDistance = planet.distance;
        let planetImage = planet.image;
        let planetMoons = planet.moons;
        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage)
        event.preventDefault()
    });


    
    
    
 });