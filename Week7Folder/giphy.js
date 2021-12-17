function getGifs(url) {
    fetch('https://api.giphy.com/v1/gifs' + url)
    .then(response =>
        response.json()
    ).then(jsonResponse => {
        var gifList = document.getElementById('gifList');
        while (gifList.firstChild) {
            gifList.removeChild(gifList.firstChild)
        }
        for (var i = 0; i < jsonResponse.data.length; i++) {
            var imgOption = jsonResponse.data[i]
            var listItem = document.createElement('li')
            var imgElement = document.createElement('img');
            imgElement.setAttribute('src', imgOption.images.fixed_width.url)
            listItem.appendChild(imgElement)
            gifList.appendChild(listItem)
        }
    });
} 

const konamiCode = "wahey".split("")
var positionInCode = 0

function executeKonamiCode() {
    getGifs('/search?q=train&api_key=3HytLEJjP62R4A3kMFoYgTtPENvl3jLV&limit=10')
    const audio = new Audio('https://bigsoundbank.com/UPLOAD/mp3/0227.mp3')
    audio.play()
    var header = document.getElementById('header')
    header.textContent = "WAHEY"
}

function checkKonamiCode(key) {
    if (konamiCode[positionInCode++] !== key) {
        positionInCode = 0
    } 
    if (positionInCode === 5) executeKonamiCode()
}

document.addEventListener('DOMContentLoaded', function(event) {
    getGifs('/trending?api_key=3HytLEJjP62R4A3kMFoYgTtPENvl3jLV&limit=10')
});

document.addEventListener('keypress', function(event) {
    checkKonamiCode(event.key)
})