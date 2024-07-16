const container = document.querySelector("#container");
const randomColorToggle = document.querySelector("#random-color-toggle");
const transparencyColorToggle = document.querySelector("#transparency-color-toggle");
const btn = document.querySelector("#grid-button")
let containerWidth = container.offsetWidth;
let subdivs;

btn.addEventListener("click", function() {
    getInput();
    resetGrid();
    populateContainer(subdivs);
})

container.addEventListener('mouseover', (event) => {

    //stop grid being drawn on before grid size is defined
    if (typeof subdivs === 'undefined') {
        return
    }
    
    let target = event.target;

    //set random colors
    if (randomColorToggle.checked) {
        target.style.backgroundColor = getRandomColor()
    } else {
        target.style.backgroundColor = "black"
    }

    //set transparency
    if (transparencyColorToggle.checked) {
        if(target.style.opacity == null || target.style.opacity == "") {
            console.log("no opacity")
            target.style.opacity = "0.1";
        } else if (target.style.opacity < 1){
            let thisOpacity = parseFloat(target.style.opacity)
            thisOpacity += 0.1;
            target.style.opacity = thisOpacity.toString();
            console.log("opacity incremented")
        }
    }
})

function resetGrid() {
    while(container.hasChildNodes() ){
        container.removeChild(container.lastChild);
    }
}

function populateContainer(subdivs){
    const sqrCount = subdivs * subdivs;
    const sqrSize = containerWidth / subdivs;
    for (let i = 0; i < sqrCount; i++) {
        newSqr = document.createElement("div");
        newSqr.classList.toggle("square");
        newSqr.style.width = sqrSize + "px";
        newSqr.style.height = sqrSize + "px";
        container.appendChild(newSqr)
    }
}

function getInput(){
    do {
        subdivs = prompt("Please enter the grid size from 1 to 100");
        subdivs = parseInt(subdivs);
        if (isNaN(subdivs)) {
            alert("You did not enter a number, please try again");
        }
    } while (isNaN(subdivs));
    
    if (subdivs > 100) {
        subdivs = 100;
    }
    if (subdivs < 1) {
        subdivs = 1;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }