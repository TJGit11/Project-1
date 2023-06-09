// Modal
var modal = document.getElementById("myModal");

// DIsplays the button that opens the modal
var btn = document.getElementById("myBtn");

// The "X" button that closes the modal on click
var span = document.getElementsByClassName("close")[0];

// Opens the modal when "open" button is clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// closes the modal
span.onclick = function () {
  modal.style.display = "none";
};

// if user clicks the anywhere on page it will close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let myButton = document.getElementById("boredom");
let jokesBox = document.querySelector("#joke");
console.log(jokesBox);
let memesBox = document.querySelector("#meme");
// memeEl = document.querySelectorAll("p")

// fetch for jokes
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b37e2d764mshfc38b857ca7cac2p1da4adjsn192eca3db725",
    "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
  },
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

myButton.addEventListener("click", function () {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let memeImg = document.createElement("img");
      memeImg.src =
        data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url;
      memesBox.innerHTML = "";
      memesBox.appendChild(memeImg);
    });

  fetch(
    "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=twopart&format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist%2Csexist&safe-mode",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      let ulTag = document.createElement("ul");
      let deliveryulTag = document.createElement("ul");
      ulTag.textContent = response.setup;
      deliveryulTag.textContent = response.delivery;
      jokesBox.innerHTML = "";
      jokesBox.append(ulTag);
      jokesBox.append(deliveryulTag);
    })
    .catch((err) => console.error(err));
});

// let historyEl = document.getElementById("history");

const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

toggleDarkModeButton.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
});

// Load dark mode preference from local storage
const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");
if (isDarkModeEnabled === "true") {
  document.body.classList.add("dark-mode");
}
