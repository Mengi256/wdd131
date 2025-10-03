const products = [
  {
    id: "fc-1888",
    name: "Channel Coco",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Giorgio Armani My Way",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Yara Lattafa",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "YSL Black Opium",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Valentino",
    averagerating: 5.0
  }
];
const select = document.querySelector("#chooseProduct");

  
products.forEach(product =>{
const option = document.createElement("option");
option.value = product.id;
option.textContent = product.name;
select.appendChild(option)
});

const year = document.querySelector("#year");

date = new Date();
year.textContent = date.getFullYear();

const lastModified = new Date (document.lastModified)
document.querySelector("#lastModified").innerHTML ="Last Modified: " + lastModified;

