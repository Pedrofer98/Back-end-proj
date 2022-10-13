

window.onload=function() {
    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener('click', createAccount, );
    // submitButton.addEventListener('click', addRowFunction.addRow());
    // console.log(addRowFunction.addRow())
}
//userData = {username,password}
let username = ''
let password = ''

function createAccount(){
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    //console.log(username);
    //console.log(password);
    // storing user and pass values in VAR's 
    IntoDatabase(username, password)

}

function IntoDatabase(user, pass){

    //console.log(user)

    // $.post("http://localhost:3000/create-account", function (data) {
            
    //     {user, pass}

        $.post( "http://localhost:3000/create-account", { username: user, password: pass } )
        .then(()=>{
            return
        })
    }

        
;





// module.exports = {
//     username,
//     password

// }

// dump of IDEAS