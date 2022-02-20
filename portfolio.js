

document.getElementById('hamb').addEventListener('click', displayMenu)

function displayMenu(){
    document.getElementById('navBar').classList.toggle('showMenu')
    document.getElementById('hamburger').classList.toggle('hamburger')
    document.getElementById('closeHamburger').classList.toggle('closeHamburger')
}