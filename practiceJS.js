// exercise - leap years
var year = prompt("Provide year!");

if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("Leap year.");
    
} else {
    console.log("Not leap year.");
}


//fizz buzz game
var numbers = [];
var itemToAdd = 1;

function fizzBuzz() {
    numbers.push(itemToAdd);

    if (itemToAdd % 3 === 0 && itemToAdd % 5 === 0) {
        console.log("fizz buzz");

    } else if (itemToAdd % 3 === 0) {
        console.log("fizz");
        
    } else if (itemToAdd % 5 === 0) {
        console.log("buzz");
        
    } else {
        console.log(numbers[numbers.length - 1]);
    }
    
    itemToAdd++;
}


//Fibonacchi sequence
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var sequence = [];
    
    if (n === 1) {
      sequence[0] = 0;
        
    } else if (n === 2) {
      sequence[0] = 0;
      sequence[1] = 1;
        
    } else if (n > 2) {
      sequence[0] = 0;
      sequence[1] = 1;
        
      for (var i = 0; i < n - 2; i++){
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
      }
        
    } else {
      console.log("Provide an integer bigger than 0");
    }
    
  return sequence;
       
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
