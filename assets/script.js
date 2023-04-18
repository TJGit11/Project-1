let jokesBox = document.createElement("joke-box")

fetch("https://api.humorapi.com/jokes/random?api-key=bcad527b721f43e9afccea7f051501b8")
.then(function(res){
    return res.json()
})
.then(function(data){
console.log(data);
})