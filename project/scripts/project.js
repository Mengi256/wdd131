


window.addEventListener("load", () => {
  const heroInfo = document.querySelector(".hero-info");
  if (heroInfo) {
    heroInfo.classList.add("animate");
  }
});

// ===== MENU TOGGLE =====
const menu = document.querySelector("#menu");
const mainNav = document.querySelector(".navigation");
const logoName = document.querySelector(".logo-name");
const header = document.querySelector("#header-container");
const logo = document.querySelector(".logo");
const hero = document.querySelector(".home-hero-section");
const menu_nav = document.querySelector(".menu-nav");
const heroSection = document.querySelector(".hero-section");

if (menu) {
  menu.addEventListener("click", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  // ===== SERVICE LINK =====
  const servicelink = document.querySelector(".service-link");
  const serviceContainer = document.querySelector(".service-container");
  if (servicelink && serviceContainer) {
    servicelink.addEventListener("click", (e) => {
      e.preventDefault();
      serviceContainer.style.display = "block";
    });
  }

  // ===== HEADER NAVIGATION LINKS =====
  const nav_links = [
    { text: "Home", href: "./index.html", active: true },
    { text: "Services", href: "#services" },
    { text: "About", href: "./about.html" },
    { text: "Contact", href: "./contact.html" },
  ];

  const navUl = document.querySelector(".navigation");
  if (navUl) {
    navUl.innerHTML = "";
    nav_links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;

      if (link.href === "./contact.html") {
        a.classList.add("contact-btn");
      }
      if (link.active) {
        a.classList.add("active");
      }

      li.classList.add("header-list");
      li.appendChild(a);
      navUl.appendChild(li);
    });
  } else {
    console.error("Navigation element not found");
  }

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      const userName = document.querySelector("#username").value.trim();
      const userEmail = document.querySelector("#useremail").value.trim();

      if (userName.length < 7) {
        e.preventDefault();
        alert("Username should be longer than 6 characters.");
        document.querySelector("#username").value = "";
        document.querySelector("#useremail").value = "";
      } else {
        alert("Thank you for joining our Newsletter!!");
      }
    });
  }

  // ===== FOOTER YEAR AND LAST MODIFIED =====
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const lastModifiedElement = document.querySelector("#lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified:  ${document.lastModified}`;
  }

  // ===== CONSULTATION OPTIONS =====
  const consultation = [
    { id: "Tax", name: "Tax services" },
    { id: "register", name: "Business Registration" },
    { id: "graphics", name: "Graphic design" },
    { id: "other", name: "Others" },
  ];

  const select = document.querySelector("#subject");
  if (select) {
    consultation.forEach((consult) => {
      const option = document.createElement("option");
      option.value = consult.id;
      option.textContent = consult.name;
      select.appendChild(option);
    });
  }

  // CONTACT FORM SUBMISSION 
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const message = document.getElementById("message").value.trim();
      if (message.length === 0) {
        alert("Please enter your inquiry before submitting.");
        return;
      }

      let inquiryCount = localStorage.getItem("inquiryCount");
      inquiryCount = inquiryCount ? parseInt(inquiryCount) : 0;
      inquiryCount++;
      localStorage.setItem("inquiryCount", inquiryCount);
      localStorage.setItem("lastInquiry", message);

      window.location.href = "inquire.html";
    });
  }
});