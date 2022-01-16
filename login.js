const body = document.querySelector("body");
const modal = document.querySelector(".modal");
let isOpened = false;
const toggleImgItem = document.querySelector('.toggle-img');

const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameRegx = /^[a-zA-Z ]+$/

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};



function toggleImg() {
    toggleImgItem.classList.toggle('register')
}


// Validation login

function validateEmail() {
    let target = event.target
    document.getElementById('error-email').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    if (emailRegx.test(target.value)) {
         target.parentElement.classList.add('correct')
    } else {
        target.parentElement.classList.add('error')
        document.getElementById('error-email').innerText = 'Has to be in email format'
    }
    loginBtnCheck()
}

function validatePassword() {
    let target = event.target
    document.getElementById('error-password').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    if (target.value.length > 5) {
        target.parentElement.classList.add('correct')
    } else {
        target.parentElement.classList.add('error')
        document.getElementById('error-password').innerText = 'Has to be at least 6 characters'
    }

    loginBtnCheck()

}

function loginBtnCheck() {
    let labels = document.querySelectorAll(".modal-left .input-block")
    loginBtn = document.querySelector('.loginBtn')
    if (labels[0].classList.contains('correct') && labels[1].classList.contains('correct')) {
        loginBtn.classList.remove('disabled')
    } else {
        loginBtn.classList.add('disabled')
    }
}


// Validation signup


function validateSName() {
    let target = event.target
    document.getElementById('error-sname').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    if (target.value.length > 5) {
        target.parentElement.classList.add('correct')
    } else {
        target.parentElement.classList.add('error')
        document.getElementById('error-sname').innerText = 'Has to be at least 6 characters'
    }
     
    signOutBtnCheck()
}


function validateSEmail() {
    let target = event.target
    document.getElementById('error-semail').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    if (emailRegx.test(target.value)) {
        target.parentElement.classList.add('correct')
   } else {
       target.parentElement.classList.add('error')
       document.getElementById('error-semail').innerText = 'Has to be in email format'
   }
    }

function validateSPassword() {
    let target = event.target
    document.getElementById('error-spassword').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    if (target.value.length > 5) {
        target.parentElement.classList.add('correct')
    } else {
        target.parentElement.classList.add('error')
        document.getElementById('error-spassword').innerText = 'Has to be at least 6 characters'
    }

        signOutBtnCheck()
}


function validateSRPassword() {
    let target = event.target
    document.getElementById('error-srpassword').innerText = ''
    target.parentElement.classList.remove('correct')
    target.parentElement.classList.remove('error')
    passValue = document.querySelector('#regrepassword').value

    if (target.value === passValue) {
        target.parentElement.classList.add('correct')
    } else {
        target.parentElement.classList.add('error')
        document.getElementById('error-srpassword').innerText = 'Password dont match'
    }

    

    signOutBtnCheck()

}

function signOutBtnCheck() {
    let labels = document.querySelectorAll(".modal-right .input-block")
    signupBtn = document.querySelector('.signUpBtn')
    if (labels[0].classList.contains('correct') && labels[1].classList.contains('correct') && labels[2].classList.contains('correct') && labels[3].classList.contains('correct')) {
        signupBtn.classList.remove('disabled')
    } else {
        signupBtn.classList.add('disabled')
    }
}