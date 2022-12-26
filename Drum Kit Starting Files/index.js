// TASK: add event listener to all buttons

// My solution:
var buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("I got clicked");
    });
});

// solution:
//var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked");
//     });
// }