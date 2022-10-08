// home, players, profile, create account

const home_Controller = (req, res) => {
    const row = [
        {header: 'Follow'},
        {header: 'Position'},
        {header: 'Team'},
        {header: 'Pts'},
        {header: 'W'},
        {header: 'D'},
        {header: 'L'},
        {header: 'GF'},
        {header: 'GA'},
        {header: 'GD'},
    ];     
    res.render('home', { title: 'Home', row });
}

const create_controller = (req, res) => {
    res.render('create-account', { title: 'Create Account'});
}

const player_search_controller = (req, res) => {
    res.render('player-search', { title: 'Players'});
}

const profile_controller = (req, res) => {
    res.render('profile', { title: 'Profile'});
}

module.exports = {
    home_Controller,
    create_controller,
    player_search_controller,
    profile_controller
  }