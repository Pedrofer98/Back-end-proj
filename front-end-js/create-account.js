const addRowFunction = require('../models/user')

window.onload=function() {
    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener('click', createAccount);
    submitButton.addEventListener('click', addRowFunction.addRow());
    console.log(addRowFunction.addRow())
}

const username = ''
const password = ''

function createAccount(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('username')
    
}

module.exports = {
    username,
    password

}

