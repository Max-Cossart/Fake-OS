function currentTime() {
  // Time variables
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let session = "AM";

  let timeDoc = document.querySelector("#time");

  // Changing 0 to 12 and AM/PM
  if (hours === 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  // Add 0 before single digit numbers
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Setting time string
  let time = `${hours}:${minutes} ${session}`;

  //  1s timeout to keep clock ticking
  let timeout = setTimeout(function () {
    currentTime();
  }, 1000);

  document.querySelector("#time").textContent = time;
}

currentTime();
