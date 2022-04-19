//change navbar on scrolling
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//show and hide frequentlyy asked questions

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon(minus)
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }
        else {
            icon.className = "uil uil-plus"
        }

    })

})



//MEDIA QUERY--HAMBURGER NAV - FOR DEKSTOP//
//SHOW AND HIDE MENU

const menu = document.querySelector(".nav__menu");
const openbutton = document.querySelector("#open-menu-btn");
const closebutton = document.querySelector("#close-menu-btn");
openbutton.addEventListener('click', () => {
    menu.style.display = "flex";
    closebutton.style.display = "inline-block";
    openbutton.style.display = "none";
})



//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closebutton.style.display = "none";
    openbutton.style.display = "inline-block";
}
closebutton.addEventListener('click', closeNav)
































































