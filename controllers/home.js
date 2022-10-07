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
              <td class="text-center">
                <div class="form-switch">
                  <form>
                    <input type="checkbox" class="form-check-input" id="myButton" value="NO" onclick="Buttontoggle(${data.team_id});">
                  </form>
                </div>
              </td>
              <td class="text-center"><h4>${data.position}</h4></td>
              <td class="text-center"><h4><a href="">${data.team_name}</a></h4></td>
              <td class="text-center"><h4>${data.points}</h4></td>
              <td class="text-center"><h4>${data.overall.won}</h4></td>
              <td class="text-center"><h4>${data.overall.draw}</h4></td>
              <td class="text-center"><h4>${data.overall.lost}</h4></td>
              <td class="text-center"><h4>${data.overall.goals_scored}</h4></td>
              <td class="text-center"><h4>${data.overall.goals_against}</h4></td>
              <td class="text-center"><h4>${data.total.goal_difference}</h4></td>
            </tr>
          `
};

function Buttontoggle(teamID) {
  

};