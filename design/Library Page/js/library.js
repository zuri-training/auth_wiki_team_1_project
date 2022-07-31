const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navitem');
    const navLinks = document.querySelectorAll('.navitem li');

    
    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate nav
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })

        //burger toggle
        burger.classList.toggle('toggle');
    });
}

navSlide();