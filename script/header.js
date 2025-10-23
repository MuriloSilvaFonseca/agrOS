// Para alternar o estado do hamburguer
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.getElementById('menuMobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
});

$(document).ready(function(){
    $(".login-btn, .entrarMob").click(function(){
        location.href = "http://3.237.239.190";
    });
});