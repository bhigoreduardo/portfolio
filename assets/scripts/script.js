let navbar = document.querySelector('header .navbar');
let menuBars = document.querySelector('header .icon-container #menu-bars');
let contactIcon = document.querySelector('header .icon-container #contact-icon');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('.contact-info #close-info').onclick = () => {
    contactInfo.classList.remove('active');
    contactIcon.classList.remove('active');
};

menuBars.onclick = () => {
    menuBars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

contactIcon.onclick = () => {
    contactIcon.classList.toggle('active');
    contactInfo.classList.add('active');
    menuBars.classList.remove('fa-times');
    navbar.classList.remove('active');
};

window.onscroll = () => {
    document.querySelector('header').classList.toggle('active', scrollY > 180);
    menuBars.classList.remove('fa-times');
    navbar.classList.remove('active');
    contactIcon.classList.remove('active');
    contactInfo.classList.remove('active');
};

let btns = $('.portfolio .group-btn button');

btns.click(function (event) {
    btns.removeClass('active');
    event.target.classList.add('active');

    let selected = $(event.target).attr('data-filter');
    $('.portfolio .container .box-container').isotope({
        filter: selected,
    });
});

let btnsPort = $('.projetos .group-btn button');

btnsPort.click(function (event) {
    btnsPort.removeClass('active');
    event.target.classList.add('active');

    let selectedPort = $(event.target).attr('data-filter');
    $('.projetos .box-container').isotope({
        filter: selectedPort,
    });
})

$(window).on('load', function () {
    $('.portfolio .container .box-container').isotope({
        filter: '*',
    });
    $('.projetos .box-container').isotope({
        filter: '*',
    });
});