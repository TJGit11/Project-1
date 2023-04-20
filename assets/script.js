// Modal
var modal = document.getElementById("myModal");


// DIsplays the button that opens the modal
var btn = document.getElementById("myBtn");


// The "X" button that closes the modal on click
var span = document.getElementsByClassName("close")[0];


// Opens the modal when "open" button is clicked
btn.onclick = function () {

    modal.style.display = "block";

}


// closes the modal
span.onclick = function () {

    modal.style.display = "none";

}


// if user clicks the anywhere on page it will close the modal
window.onclick = function (event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }

}