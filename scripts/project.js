
window.addEventListener("load",() =>{
   document.querySelector(".hero-info").classList.add("animate")
 })
// HAMBURGER MENU TOGGLE //


// const menu = document.querySelector("#menu");
// const mainNav  = document.querySelector(".navigation");
// const logoName = document.querySelector(".logo-name")
// const header = document.querySelector("#header-container")
// const logo = document.querySelector(".logo")
// const hero = document.querySelector(" .home-hero-section")
// const menu_nav = document.querySelector(".menu-nav")


// const heroSection = document.querySelector('.hero-section')
// menu.addEventListener("click", function(){
//   menu.classList.toggle("show")
//   mainNav.classList.toggle("show");
//   logoName.classList.toggle("show")
//   header.classList.toggle("show")
//   logo.classList.toggle("show")
//   hero.classList.toggle("show")
//   heroSection.classList.toggle("show")
//   menu_nav.classList.toggle("show")
  

// });

// document.addEventListener("DOMContentLoaded",function(){
//   const servicelink = document.querySelector(" .service-link")
//  const serviceContainer = document.querySelector(".service-container")
//  servicelink.addEventListener("click",function(e){
//   e.preventDefault()
//  serviceContainer.style.display = "block"})

// });

// ===== MENU TOGGLE =====
const menu = document.querySelector("#menu");
const mainNav  = document.querySelector(".navigation");
const logoName = document.querySelector(".logo-name");
const header = document.querySelector("#header-container");
const logo = document.querySelector(".logo");
const hero = document.querySelector(".home-hero-section");
const menu_nav = document.querySelector(".menu-nav");
const heroSection = document.querySelector(".hero-section");

// Only run menu toggle if menu exists
if (menu) {
  menu.addEventListener("click", function() {
    menu.classList.toggle("show");
    mainNav?.classList.toggle("show");
    logoName?.classList.toggle("show");
    header?.classList.toggle("show");
    logo?.classList.toggle("show");
    hero?.classList.toggle("show");
    heroSection?.classList.toggle("show");
    menu_nav?.classList.toggle("show");
  });
}

// ===== SERVICE LINK (only for home page) =====
document.addEventListener("DOMContentLoaded", function() {
  const servicelink = document.querySelector(".service-link");
  const serviceContainer = document.querySelector(".service-container");

  if (servicelink && serviceContainer) {
    servicelink.addEventListener("click", function(e) {
      e.preventDefault();
      serviceContainer.style.display = "block";
    });
  }
});

// // HEADER NAVIGATION LINKS//

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

// Only run if the form exists on this page
const form = document.querySelector("#newsletter-form");

if (form) {
  form.addEventListener("submit", function(e) {
    const userName = document.querySelector("#username").value.trim();
    const userEmail = document.querySelector("#useremail").value.trim();

    if (userName.length < 7) {
      e.preventDefault();
      alert("Username should be longer than 6 characters.");

      // clear input fields
      document.querySelector("#username").value = "";
      document.querySelector("#useremail").value = "";
    }
  });
}

const year = document.querySelector("#year");

if (year) {
  const date = new Date();
  year.textContent = date.getFullYear();

  const lastModified = new Date(document.lastModified);
  const lastModifiedElement = document.querySelector("#lastModified");

  if (lastModifiedElement) {
    lastModifiedElement.innerHTML = "Last Modified: " + lastModified;
  }
}


const consultation = [
  {id : "Tax", name:"Tax services"},
{
  id : "register",
  name : "Business Registration"
},
{
  id: "graphics",
  name: "Graphic design"
},
{ 
  id: "other",
  name: "Others"
}
]
  
const select = document.querySelector("#subject");
  
consultation.forEach(consult =>{
const option = document.createElement("option");
option.value = consult.id;
option.textContent = consult.name;
select.appendChild(option)
});


