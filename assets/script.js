// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
let historyActivity = document.getElementById("history");

fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.activity);
    localStorage.setItem("Activity", data.activity);
  });
let storedActivity = localStorage.getItem("Activity");

historyActivity.textContent = storedActivity;
console.log(storedActivity);
