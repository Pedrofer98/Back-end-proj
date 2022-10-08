window.onload=function() {
    const submitButton = document.getElementById('create-btn');
    submitButton.addEventListener('click', createAccount);
}

function createAccount(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('test')
    
}