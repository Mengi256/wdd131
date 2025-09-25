

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
 {
    
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
 },
 {
    templeName: "Dallas Texas",
    location: "Dallas, Texas",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
 },
 {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 2236,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
 },
 {
  templeName: "Accra Ghana",
    location: "57 Independence Ave, North Ridge",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
 },
 {
  templeName: "Apia Samoa",
    location: "Pesege, Apia",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
 }
];

    const templeInfo = function(temples){
    const container = document.querySelector(".temple-container");
    container.innerHTML = "";
    temples.forEach((temple)=>{
        const div = document.createElement('div');
        div.classList.add("temple");
        div.innerHTML = 
        `
        <h2> ${temple.templeName}</h2>
        <p> <span> LOCATION:</span> ${temple.location}</p>
        <p><span> DEDICATED:</span> ${temple.dedicated}</p>
        <p> <span>SIZE </span> : ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt = "${temple.templeName}" loading="lazy" fetchpriority="high">
        
`;
    
    container.appendChild(div)

    });
    
}; 
templeInfo(temples)

const menuBar = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")
const heading = document.querySelector("#headerHeading")
const header = document.querySelector("header")

 menuBar.addEventListener("click", function(){
  menuBar.classList.toggle("open");
  navigation.classList.toggle("open");
  heading.classList.toggle("open");
  header.classList.toggle('open');
})

const year = document.querySelector("#year");
const date = new Date();
year.textContent = date.getFullYear();

const lastModified = new Date (document.lastModified)
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;

  document.querySelector("#before-1900").addEventListener("click",function(){
    let results = temples.filter(temple => {
      let year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900
    });
    templeInfo(results)
  });
  document.querySelector("#after-2000").addEventListener("click",function(){
    let results = temples.filter(temple => {
      let year = parseInt(temple.dedicated.split(",")[0]);
      return year > 2000
    });
    templeInfo(results)
  });

  document.querySelector("#larger-90000").addEventListener("click",function(){
    let results = temples.filter(temple => temple.area > 90000)
 templeInfo(results)
    });
   
    

   
    
  document.querySelector("#smaller-10000").addEventListener("click",function(){
    let results = temples.filter(temple => temple.area < 10000)
 templeInfo(results)
    });


  document.querySelector("#home").addEventListener("click",function(){
   templeInfo(temples)
    }); 
 