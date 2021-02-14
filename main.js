const button = document.querySelector('.hamburger');
const welcome = document.querySelector('.welcome');
const buttontwo = document.querySelector('.close');
const nav = document.querySelector('nav');
const footerlogo = document.querySelector('.footerlogo');


button.addEventListener('click', function() {
    welcome.classList.toggle('active');
    welcome.classList.toggle('welcome');
    button.style.display = 'none';
    if(button.style.display = 'none') {
        buttontwo.style.display = 'block'; 
        nav.style.display = 'block';
    }
})

buttontwo.addEventListener('click', function() {
    welcome.classList.toggle('active');
    welcome.classList.toggle('welcome');
    buttontwo.style.display = 'none'
    if(buttontwo.style.display = 'none') {
        button.style.display = 'block';
        nav.style.display = 'none';
        
    }
})

const scrollToTop = () => {
    welcome.scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener("orientationchange", function() {
    window.location.reload();
  });


footerlogo.addEventListener('click', scrollToTop);



