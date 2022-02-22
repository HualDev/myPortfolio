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
        document.getElementById('errorName').style.display='block'
        document.getElementById('name').focus()
    }

    else if(mail==''){
        document.getElementById('errorEmail').style.display='block'
        document.getElementById('email').focus()
    }

    else if(subject==''){
        document.getElementById('errorSubject').style.display='block'
        document.getElementById('subject').focus()
    }    
    
}