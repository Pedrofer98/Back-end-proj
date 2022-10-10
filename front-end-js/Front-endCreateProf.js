

window.onload=function() {
    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener('click', createAccount, );
    // submitButton.addEventListener('click', addRowFunction.addRow());
    // console.log(addRowFunction.addRow())
}
//userData = {username,password}
const username = ''
const password = ''

function createAccount(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log(username);
    console.log(password);
    // storing user and pass values in VAR's 
    IntoDatabase()

}

function IntoDatabase(){

    // $.post("http://localhost:3000/login")

    $.post("http://localhost:3000/create-account", function (data) {
            
        {username, password}
    })

        
};





// module.exports = {
//     username,
//     password

// }

// dump of IDEAS