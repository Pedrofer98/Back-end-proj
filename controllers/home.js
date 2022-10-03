// Puts API in a variable
const leagueStatsAPI = 'https://soccer.sportmonks.com/api/v2.0/standings/season/19735?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid';

// Calls API and turns it into json
fetch(leagueStatsAPI)
.then(response => response.json())
.then(json => {
  // Dives into json and creates a new array with only the info we need
  const data = json.data[0].standings.data;
  const statsArray = new Array();
    for (let i = 0; i < data.length; i++) {
      statsArray.push(stats(data[i]));
    }
    // Points the new array towards the html
    Promise.all(statsArray).then(html => {
      document.querySelector('#stats').innerHTML = html.join('');
    });
});

// Enters the new array into the html
async function stats(data) {
  console.log(data);
  return  `
            <tr>
              <td>${data.position}</td>
              <td>${data.team_name}</td>
              <td>${data.points}</td>
              <td>${data.overall.won}</td>
              <td>${data.overall.draw}</td>
              <td>${data.overall.lost}</td>
            </tr>
          `
};