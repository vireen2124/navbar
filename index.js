const burgerDiv=document.querySelector(".burger-div");
const navLinks=document.querySelector(".nav-links");
const socialMediaLinks=document.querySelector(".nav-social-media");
const closeCircle=document.querySelector(".close-circle")
burgerDiv.addEventListener("click",()=>{
    navLinks.classList.toggle("nav-is-active");
    socialMediaLinks.classList.toggle("nav-is-active");
    burgerDiv.classList.toggle("burger-clicked")
})
closeCircle.addEventListener("click",()=>{
    navLinks.classList.remove("nav-is-active");
    socialMediaLinks.classList.remove("nav-is-active");
    burgerDiv?.classList.remove("burger-clicked")
})
