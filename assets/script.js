let jokesBox = document.querySelector("#joke")
console.log(jokesBox)
let memesBox = document.querySelector("meme")


// fetch for jokes
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8b37e2d764mshfc38b857ca7cac2p1da4adjsn192eca3db725',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
    }
};

fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw%2Cracist', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let pTag = document.createElement("p")
        let deliveryPTag = document.createElement("p")
        pTag.textContent = response.setup
        deliveryPTag.textContent = response.delivery

        jokesBox.append(pTag)
        jokesBox.append(deliveryPTag)
    })
    .catch(err => console.error(err));



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

