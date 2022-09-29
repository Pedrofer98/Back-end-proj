//https://soccer.sportmonks.com/api/v2.0/players/search/James%20Forrest?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid

window.onload=function() {

    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener("click", playersearch);
}

function playersearch(){
    //let result = document.getElementById('player-search').value.trim()
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/James%20Forrest?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
     })
    }