// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML; // Retrieve the innerHTML of the clicked button
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML); // Move this line inside the click event listener
    });
}

// keyboard setting keyboard press
document.addEventListener("keydown", function (event) {
    makesound(event.key.toLowerCase()); // Convert to lowercase
    buttonAnimation(event.key.toLowerCase()); // Move this line inside the keydown event listener
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey); // Select the button corresponding to the key

    activeButton.classList.add("pressed"); // Add the "pressed" class

    // Remove the "pressed" class after a short delay
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
