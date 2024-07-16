console.log("hi")

const container = document.querySelector("#container")
let containerWidth = container.offsetWidth;
console.log(containerWidth)
let subdivs = 4;

populate(subdivs);

function populate(subdivs){
    const sqrCount = subdivs * subdivs;
    const sqrSize = containerWidth / subdivs;
    console.log(sqrSize);
    for (let i = 0; i < sqrCount; i++) {
        newSqr = document.createElement("div");
        newSqr.classList.toggle("square");
        newSqr.style.width = sqrSize + "px";
        newSqr.style.height = sqrSize + "px";
        container.appendChild(newSqr)
    }
}