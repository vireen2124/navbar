const burgerDiv=document.querySelector(".burger-div");
const navLinks=document.querySelector(".nav-links");
const socialMediaLinks=document.querySelector(".nav-social-media");
burgerDiv.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-is-active");
    socialMediaLinks.classList.toggle("nav-is-active");
    burgerDiv.classList.toggle("burger-clicked")
})
