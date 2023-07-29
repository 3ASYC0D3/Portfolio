let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(section => {
     let top = window.scrollY + 100;
     let offset = section.offsetTop;
     let height = section.offsetHeight;
     let id = section.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(link =>{
            link.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        })
    }
    })
}