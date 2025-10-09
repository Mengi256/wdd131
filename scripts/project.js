
window.addEventListener("load",() =>{
   document.querySelector(".hero-info").classList.add("animate")
 })
// HAMBURGER MENU TOGGLE //


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

// HEADER NAVIGATION LINKS//

const nav_links =[
{text:"Home", href: "./project.html", active:true},
{text:"About", href: "./about.html"},
{text:"Services", href: "#services"},
{text:"Contact", href: "./contact.html"},

];

const navUl = document.querySelector(".navigation");
if(navUl){
    navUl.innerHTML = "";
    nav_links.forEach(link =>{
    
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href; 

      if(link.href === "contact.html"){
        a.classList.add("contact-btn")
      }
    
      if(link.active) a.classList.add("active")
     
      li.classList.add("header-list")  
      li.appendChild(a)
      navUl.appendChild(li)
 })}
 else{
  console.error(" Nvigation element not found")
 }
 ;

//  NEWSLETTER FORM

const form = document.querySelector("#newsletter-form");
form.addEventListener("submit",function(e){
  const userName = document.querySelector("#username").value;
  const userEmail = document.querySelector("#useremail").value;
  if(userName.length < 7 ){
    e.preventDefault();
    alert("Username should be longer than 6 characters ")
   document.querySelector("#userName").value = ""
   document.querySelector("#userEmail").value = ""

}
   
});

// const counters = document.querySelectorAll(".count");
// counters.forEach(counter =>{
//   const updateCount = () =>{
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;

//     const increment = target /200;
//     if(count <target){
//       counter.innerText = (count+increment).toFixed(decimals);
//       setTimeout(updateCount,10)

//     }
//     else{
//       counter.innerText = target.toFixed(decimals)
//     }
//   };
//   updateCount();
// })
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  const updateCount = () => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const currentText = counter.innerText.replace(/[^\d.]/g, ""); // Remove non-numeric characters
    const count = parseFloat(currentText) || 0;

    const increment = target / 200;
    const decimals = target % 1 !== 0 ? 1 : 0;

    if (count < target) {
      counter.innerText = (count + increment).toFixed(decimals) + getSuffix(counter.innerText);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target.toFixed(decimals) + getSuffix(counter.innerText);
    }
  };

  updateCount();
});

function getSuffix(text) {
  const match = text.match(/[^\d.]+$/);
  return match ? match[0] : "";
}

