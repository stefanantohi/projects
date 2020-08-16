const currentMoon = document.getElementById("moon");
const currentPlanet = document.getElementById("planet");
const numberOfDiscs = 10;

function addVerticalMoonDiscs() {
    for(i = 1; i <= numberOfDiscs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "layerMoon";
        newDiv.style.transform = 'rotateY(' + (360/numberOfDiscs)*i + 'deg)';
        newDiv.style.webkitTransform = 'rotateY(' + (360/numberOfDiscs)*i + 'deg)';
        currentMoon.appendChild(newDiv);
    }
};

function addHorizontalMoonDiscs() {
    for(i = 1; i <= numberOfDiscs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "layerMoon";
        newDiv.style.transform = 'rotateX(' + (360/numberOfDiscs)*i + 'deg)';
        newDiv.style.webkitTransform = 'rotateX(' + (360/numberOfDiscs)*i + 'deg)';
        currentMoon.appendChild(newDiv);
    }
};

addHorizontalMoonDiscs();
addVerticalMoonDiscs();

function addVerticalPlanetDiscs() {
    for(i = 1; i <= numberOfDiscs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "layerPlanet";
        newDiv.style.transform = 'rotateY(' + (360/numberOfDiscs)*i + 'deg)';
        newDiv.style.webkitTransform = 'rotateY(' + (360/numberOfDiscs)*i + 'deg)';
        currentPlanet.appendChild(newDiv);
    }
};

function addHorizontalPlanetDiscs() {
    for(i = 1; i <= numberOfDiscs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "layerPlanet";
        newDiv.style.transform = 'rotateX(' + (360/numberOfDiscs)*i + 'deg)';
        newDiv.style.webkitTransform = 'rotateX(' + (360/numberOfDiscs)*i + 'deg)';
        currentPlanet.appendChild(newDiv);
    }
};

addHorizontalPlanetDiscs();
addVerticalPlanetDiscs();