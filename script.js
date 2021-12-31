let mainImage = document.querySelector('.main-image-carousel-section');
let counter = 100;

counter = Math.abs(counter);

let arrow = document.querySelectorAll('.button');

if (screen.width > 450) {

    arrow[1].addEventListener('click', () => {
        counter++;
        if (counter % 3 == 1) {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-1.jpg')";
        }
        else if(counter % 3 == 2) {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-2.jpg')";
        }
        else {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-3.jpg')";
        }
    });

    arrow[0].addEventListener('click', () => {
        counter--;
        if (counter % 3 == 1) {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-1.jpg')";
        }
        else if(counter % 3 == 2) {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-2.jpg')";
        }
        else {
            mainImage.style.backgroundImage = "url('./assets/desktop-image-hero-3.jpg')";
        }
    });

}

else {

    arrow[1].addEventListener('click', () => {
        counter++;
        if (counter % 3 == 1) {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-1.jpg')";
        }
        else if(counter % 3 == 2) {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-2.jpg')";
        }
        else {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-3.jpg')";
        }
    });

    arrow[0].addEventListener('click', () => {
        counter--;
        if (counter % 3 == 1) {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-1.jpg')";
        }
        else if(counter % 3 == 2) {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-2.jpg')";
        }
        else {
            mainImage.style.backgroundImage = "url('./assets/mobile-image-hero-3.jpg')";
        }
    });

}

window.onresize = () => location.reload();

let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');
let navItems = document.querySelector('ul');
let logo = document.querySelector('.company');
let overlay = document.querySelector('.black');

menu.addEventListener('click', () => {
    navItems.style.display = 'flex';
    logo.style.display = 'none';
    menu.style.display = 'none';
    close.style.display = 'block';
    nav.classList.add('new-nav');
    overlay.style.display = 'block';
});

close.addEventListener('click', () => {
    navItems.style.display = 'none';
    logo.style.display = 'block';
    menu.style.display = 'block';
    close.style.display = 'none';
    nav.classList.remove('new-nav');
    overlay.style.display = 'none';
});