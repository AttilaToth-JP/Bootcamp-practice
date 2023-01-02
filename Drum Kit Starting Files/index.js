// TASK: add event listener to all buttons, add event lsitener to key corresponding key presses, play corresponding sound

// My solution:

// function that plays the sound, parameter is the key from event listeners
var letter;

function playSound(letter) {
    switch (letter) {
        case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
            
        case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

        case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
            
        case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

        case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

        case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

        case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

        default:
                console.log(buttonInnerHtml);
            break;
    }
}

// Event listener for key presses
document.addEventListener("keydown", function(event){
    letter = event.key;
    playSound(letter);
});

// Event lsitener for button clicks
var buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        letter = this.innerHTML;
        playSound(letter);
    });
});



// solution:
//var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked");
//     });
// }
