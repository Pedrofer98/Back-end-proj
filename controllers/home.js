const leagueAPI = 'https://soccer.sportmonks.com/api/v2.0/standings/season/19735?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid';

fetch(leagueAPI)
  .then(response => response.json())
  .then(json => {
    console.log(json.data[0].standings.data);
  });

// let html = "<table>";
// for (let i = 0; i < statsArray.length; i++) {
//     html+="<tr>";
//     html+="<td>"+statsArray[i].position+"</td>";
//     html+="<td>"+statsArray[i].team_name+"</td>";
//     html+="<td>"+statsArray[i].overall.points+"</td>";
//     html+="</tr>";
// }

// html+="</table>";
// document.getElementById("table").innerHTML = html;