const darkModeToggle = document.querySelector('#dark-mode-toggle');
const celular = document.getElementById('celular-img');
const logo = document.getElementById('logo');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  logo.src = './img/instagram-logo-white.png';
  celular.src = './img/instagram-celular-darkmode.png';
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  logo.src = './img/instagram-logo.png';
  celular.src ='./img/instagram-celular.png';
}

darkModeToggle.addEventListener('click', () => {

  if (document.body.classList.value !== 'darkmode') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }

});