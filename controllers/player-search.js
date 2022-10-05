//https://soccer.sportmonks.com/api/v2.0/players/search/James%20Forrest?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid
window.onload=function() {
    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener('click', playersearch);
}
//Take search input and search api for results
function playersearch(){
    let player = document.getElementById('player-search').value.trim()
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${player}?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid&include=stats`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const topThreeArray = data.data.slice(0, 3);
        const aHtML = new Array();
        for(let i=0; i<topThreeArray.length; i++) {
            aHtML.push(results(topThreeArray[i]));
        }
        Promise.all(aHtML).then(html => {
            console.log(html);
            document.querySelector('.card-container').innerHTML = html.join('');
        });
        //document.querySelector(‘.card-container’).innerHTML = ‘’;
        //topThreeArray.forEach(async data => await results(data));
        //results(topThreeArray[0])
     })
}
async function results(data){
    //console.log(data);
    var statsResult = stats(data);
    if (statsResult == undefined){
        return '';
    }
    return `
        <div class='card'>
            <div class='card-body'>
                <img src='${data.image_path}' alt='' class='card-image'/>
                <h3 class=“card-title”>${data.fullname}</h3>
                    <ul>
                        <li>Birth country: ${data.birthcountry}</li>
                        <li>Nationality: ${data.nationality}</li>
                        <li>Birth date: ${data.birthdate}</li>
                        <li>Height: ${data.height}</li>
                        <li>Team: ${await getTeam(data.team_id)}</li>
                        <li>stats: ${statsResult.goals}</li> // just reference statsResuslts._____ whaterver state we want.
                        <li>Nationality: ${data.nationality}</li>
                        <li>Birth date: ${data.birthdate}</li>
                    </ul>
            </div>
        </div>
        `
}
async function getTeam(id){
    //console.log(id);
    if (id == null) {
        return 'no team';
    } else {
        let response = await fetch(`https://soccer.sportmonks.com/api/v2.0/teams/${id}?api_token=ljGMMrxuRdt4Uq0FHzS6k9KhmsOjCE5EwwdMMPZ4xQYW96KIzmPAtIY6Vnid`);
        let data = await response.json();
        console.log(data.data.name);
        return data.data.name;
    }
}
// // async function getStats(input){
// //     console.log(input);
//     if (isNaN(`data.stats.data[0].${input}`)) {
// //         return “none”;
// //     } else {
// //         return `data.stats.data[0].${input}`;
// //     }
function stats(data){
    const stats = data.stats.data
    console.log(stats);
    if (stats.length == 0 ){
        return undefined;
    }
        else return stats[0];
    };
// }
{/* <h4>Stats</h4>
// <ul>
//     <li>Goals: ${await getStats(goals)}</li>
//     <li>Assists: ${await getStats(assists)}</li>
//     <li>Birth date: </li>
//     <li>Height: </li>
</ul> */}