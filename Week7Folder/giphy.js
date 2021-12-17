function getGifs() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=3HytLEJjP62R4A3kMFoYgTtPENvl3jLV&limit=10')
    .then(response =>
        response.json()
    ).then(jsonResponse => {
        console.log(jsonResponse)
        var gifList = document.getElementById('gifList');
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

document.addEventListener('DOMContentLoaded', function(event) {
    getGifs()
});