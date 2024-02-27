// CONSOLE 

console.log("Testing my file")


// INTERACTION 
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");

let interactionContainer = document.getElementById("interactionContainer");


greenCircle.addEventListener("click", function () {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
}
)

pinkCircle.addEventListener("click", function () {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "plum";
}
)

blueCircle.addEventListener("click", function () {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightblue";
}
)


// FOR LOOP
const loopContainer = document.getElementById("loopContainer");
const message = "brave";
// const textDiv = document.createElement("div");


// if you need to create variable multiple times you need to put it inside the loop
for (let i = 0; i < 10; i++) {
    console.log("brave");

    const textDiv = document.createElement("div");

    // putting content inside div 

    textDiv.innerHTML = message;
    // going to be added inside parent container and in brackets, passing the div container
    // will repeat 10 times inside 
    loopContainer.appendChild(textDiv);
}


//  CONDITION 

const conditionContainer = document.getElementById("conditionContainer");
const squareContainer = document.getElementById("square");


// hover is mouseover
squareContainer.addEventListener("mouseover", function () {
    console.log("hover");
    squareContainer.style.backgroundColor = "green";
})

// when mouse is not hovering
// can try if statements
squareContainer.addEventListener("mouseout", function () {
    // console.log("hover");
    squareContainer.style.backgroundColor = "lightsalmon";
})




// TIME 

const timeContainer = document.getElementById("timeContainer");


// https://www.w3schools.com/js/js_loop_while.asp 
let i = 0;

// couldn't figure out infinite time
while (i < 1000) {
    // document.getElementById("increaseText").style.fontSize = "10px" + i * 2;
    delay(i);
    i++;
}

// https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/
function delay(i) {

    setTimeout(function () {
        // console.log(i * 5);
        // document.getElementById("increaseText").innerHTML = "Increase";
        // console.log(i);

        // https://www.youtube.com/watch?v=T1rLPD0zDB4
        let textFontSize = window.getComputedStyle(document.getElementById("increaseText"), null).getPropertyValue("font-size");
        // let text = document.getElementById("increaseText");

        textFontSize = parseFloat(textFontSize);



        increaseText.style.fontSize = (textFontSize + 1) + "px";

        console.log(increaseText.style.fontSize);

    }, 2000 * i)
}



// INPUT

let inputContainer = document.getElementById("inputContainer");
// had to change button type from submit to button
const button = document.getElementById("submit");

button.addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value;
    document.getElementById("text-length").textContent = inputText.length;

    console.log(inputText);
})

