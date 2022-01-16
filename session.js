

function signUp() {
    event.preventDefault();
    let modelRightInputs = document.getElementsByClassName('modal-right')[0]
    let inputs = modelRightInputs.getElementsByClassName('input-block')
    let name = inputs[0].querySelector('input').value
    let email = inputs[1].querySelector('input').value
    let password = inputs[2].querySelector('input').value
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('temp', true);
    toggleImg()
}

function login() {
    event.preventDefault();
    let modelLeftInputs = document.getElementsByClassName('modal-left')[0]
    let inputs = modelLeftInputs.getElementsByClassName('input-block')
    let email = inputs[0].querySelector('input').value
    let password = inputs[1].querySelector('input').value


    if (localStorage.getItem('email') !== email) {
        errorLogin("wrong email")
    } else if(localStorage.getItem('password') !== password) {
        errorLogin("wrong password")
    } else {
        localStorage.setItem('temp', true);
        location.replace("./index.html");
    }
}


function signout(){
    localStorage.setItem('temp', false);
    location.replace("./login.html")
}

function errorLogin (e) {
    document.getElementById('error-cred').innerText = ''
    e === "wrong email"
        ? document.getElementById('error-cred').innerText = 'Email dont exist'
        : e=== "wrong password"
            ? document.getElementById('error-cred').innerText = 'Password dont match'
            : ''
}

if (document.getElementsByClassName('wg-names')[0]) {
    document.getElementsByClassName('wg-names')[0].innerText = localStorage.getItem('name')
}
