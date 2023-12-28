const switchToggle = document.querySelector('#input');
const toggleIcon = document.querySelector('#toggle-icon');
const nav = document.getElementById('nav');
const text = document.querySelector('.invisible');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2')

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
        imgSwitch('dark')
    }
    else{
        document.documentElement.setAttribute('data-theme','tt')
        lightMode();
        imgSwitch('light')
    } 
}

function darkMode(){
    toggleIcon.children[0].textContent = "DARK MODE"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)"
}

function lightMode(){
    toggleIcon.children[0].textContent = "LIGHT MODE"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)"
}

switchToggle.addEventListener('change',switchMode);

function imgSwitch(mode){
    img1.src =  `img/undraw_game_day_ucx9.${mode}.svg`;
    img2.src = `img/undraw_gaming_re_cma2.${mode}.svg`;
}