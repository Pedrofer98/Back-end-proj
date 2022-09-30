const leagueStats = {
    method: 'GET',
  };
  
  fetch("https://soccer.sportmonks.com/api/v2.0/standings/season/19735?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid", leagueStats)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));