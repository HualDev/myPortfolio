let nombre=''
let mail=''
let subject=''

document.getElementById('hamb').addEventListener('click', displayMenu)
document.getElementById('submit').addEventListener('click',displayError)

function displayMenu(){
    document.getElementById('navBar').classList.toggle('showMenu')
    document.getElementById('hamburger').classList.toggle('hamburger')
    document.getElementById('closeHamburger').classList.toggle('closeHamburger')
}

function displayError(){
    nombre=document.getElementById('name').value
    mail=document.getElementById('email').value
    subject=document.getElementById('subject').value

    if(nombre==''){
        document.getElementById('name').style.backgroundImage="url('./images/icon-error.svg')"
        document.getElementById('name').focus()
        document.getElementById('name').style.outlineColor='tomato'
    }

    else if(mail==''){
        document.getElementById('email').style.backgroundImage="url('./images/icon-error.svg')"
        document.getElementById('email').focus()
        document.getElementById('email').style.outlineColor='tomato'
    }

    else if(subject==''){
        document.getElementById('subject').style.backgroundImage="url('./images/icon-error.svg')"
        document.getElementById('subject').focus()
        document.getElementById('subject').style.outlineColor='tomato'
    }      
    
}