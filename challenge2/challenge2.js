// asking user for car speed
const carSpeed = (prompt("Enter the speed of the car (in km/h):"));


//  demerit points
let demeritPoints = 0;

if (carSpeed <= 70) {
  console.log("Ok");
} else {

  let demeritPoints = Math.floor((carSpeed - 70) / 5);

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points:", demeritPoints);
  }
} 