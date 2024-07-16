const container = document.querySelector("#container")
let containerWidth = container.offsetWidth;

container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.classList.add("marked")
})

getInput();
populateContainer(subdivs);



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