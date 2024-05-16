const bar = document.getElementById('Bar');
const closs = document.getElementById('Close');
const nav = document.getElementById('Navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(closs){
    closs.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}