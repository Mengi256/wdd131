const menu = document.querySelector("#menu");
const mainNav  = document.querySelector(".navigation");
const logoName = document.querySelector(".logo-name")
const header = document.querySelector("#header-container")
const logo = document.querySelector(".logo")
const hero = document.querySelector(" .home-hero-section")
const menu_nav = document.querySelector(".menu-nav")
const body = document.querySelector("body")

const heroSection = document.querySelector('.hero-section')
menu.addEventListener("click", function(){
  menu.classList.toggle("show")
  mainNav.classList.toggle("show");
  logoName.classList.toggle("show")
  header.classList.toggle("show")
  logo.classList.toggle("show")
  hero.classList.toggle("show")
  heroSection.classList.toggle("show")
  menu_nav.classList.toggle("show")
  body.classList.toggle("show")

});

document.addEventListener("DOMContentLoaded",function(){
  const service_link = document.querySelector(" .service-link")
 const service_container = document.querySelector(".service-container")
 service_link.addEventListener("click",function(e){
  e.preventDefault()
 service_container.style.display = "block"})

});