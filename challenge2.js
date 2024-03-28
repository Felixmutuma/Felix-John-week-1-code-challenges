//Define a variable for the speed of a car
let speedCar;
// Initialise demerit points to 0
let demeritPoints=0;
//Set speed limit to be 70;
const speedLimit=70;

//Define a function to check if speed of car >70
// and log OK else it calls displayMeritPoints
function checkSpeed(speedCar){
    if (speedCar< 70){
        console.log("Ok");
    }
    else{
        displayMeritPoints(speedCar);
    }
}
// This function subtracts spped of the car from speed Limit ie 70 And
// calculates the demerit points. If the points exceeds 12 it suspends the 
// licence otherwise it prints the points.
function displayMeritPoints(speedCar){

   const overSpeed = speedCar-speedLimit;
    demeritPoints=overSpeed/5;
    if (demeritPoints>12) {
        console.log("Licence suspended");
    } else {
        console.log(`Points:${demeritPoints}`);
    }
}


// Finally invoke the method and pass speed of the car as a parameter.
// in this case it prints out six points.
checkSpeed(100);