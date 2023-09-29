
document.addEventListener('DOMContentLoaded', function() {
    // Tu código JavaScript aquí
  
  

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginBtn = document.querySelector('.btnLogin-popup');
const formLogin = document.querySelector('.form-box.login');
const formRegister = document.querySelector('.form-box.register');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

loginBtn.onclick = () => {
    wrapper.classList.toggle('active-popup');
    formLogin.style.display = wrapper.classList.contains('active-popup') ? 'block' : 'none';
    formRegister.style.display = wrapper.classList.contains('active-popup') ? 'none' : 'block';
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
};

const btnLoginPopup = document.querySelector('.btnLogin-popup');
const popup = document.querySelector('#popup');

btnLoginPopup.addEventListener('click', () => {
    popup.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    popup.classList.remove('active-popup');
});

});