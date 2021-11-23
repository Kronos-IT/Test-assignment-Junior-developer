// Вместо png и других форматов сразу подставляется webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Смена списков

const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__menu'),
    body = document.querySelector('body'),
    links = document.querySelectorAll('.header__link'),
    subList = document.querySelectorAll('.header__subList'),
    subLinks = document.querySelectorAll('.header__subLink'),
    first = document.querySelectorAll('.first'),
    child = document.querySelectorAll('.header__child'),
    second = document.querySelectorAll('.second'),
    footer = document.querySelector('.header__footer');

// при клике добавляется класс
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});

// для всех списков при клике добавляется к дочернему элементу класс active и убирается нижнее меню
links.forEach(li => {
    li.addEventListener('click', () => {
        li.parentElement.classList.toggle('active');
        footer.classList.toggle('active');
    });
});

subLinks.forEach(li => {
    li.addEventListener('click', () => {
        li.parentElement.classList.toggle('active');
    });
});

first.forEach(e => {
    e.addEventListener('click', () => {
        subList.forEach(e => {
            e.parentNode.classList.remove('active');
        });
    });
});

second.forEach(e => {
    e.addEventListener('click', () => {
        child.forEach(e => {
            e.parentNode.classList.remove('active');
        });
    });
});

// changeLng

const select = document.querySelector('select'),
    allLang = ['us', 'nt', 'bl', 'ru', 'kz', 'tr'],
    services = document.querySelectorAll('.services'),
    manage = document.querySelectorAll('.manage'),
    telecom = document.querySelectorAll('.telecom'),
    about = document.querySelectorAll('.about'),
    cloud = document.querySelectorAll('.cloud'),
    servers = document.querySelectorAll('.servers'),
    platform = document.querySelectorAll('.platform'),
    security = document.querySelectorAll('.security'),
    contacts = document.querySelector('.contacts'),
    search = document.querySelector('.search');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    services.forEach(a => {
        a.innerHTML = langArr["services"][hash];
    });
    manage.forEach(a => {
        a.innerHTML = langArr["manage"][hash];
    });
    telecom.forEach(a => {
        a.innerHTML = langArr["telecom"][hash];
    });
    about.forEach(a => {
        a.innerHTML = langArr["about"][hash];
    });
    cloud.forEach(a => {
        a.innerHTML = langArr["cloud"][hash];
    });
    servers.forEach(a => {
        a.innerHTML = langArr["servers"][hash];
    });
    platform.forEach(a => {
        a.innerHTML = langArr["platform"][hash];
    });
    security.forEach(a => {
        a.innerHTML = langArr["security"][hash];
    });
    contacts.innerHTML = langArr["contacts"][hash];
    search.innerHTML = langArr["search"][hash];

}
changeLanguage();




