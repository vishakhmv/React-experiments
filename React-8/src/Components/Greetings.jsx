import Hours from "./Hours";

function Greetings() {
  let greeting;
  let currentTime = Hours();

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return greeting;
}

export default Greetings;
