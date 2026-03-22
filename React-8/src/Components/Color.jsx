import Hours from "./Hours";

function Color() {
  let color;
  let currentTime = Hours();
  if (currentTime < 12) {
    color = "red";
  } else if (currentTime < 18) {
    color = "green";
  } else {
    color = "blue";
  }
  return color;
}

export default Color;
