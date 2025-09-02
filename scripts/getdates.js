// GETTING THE CURRENT YEAR 

const currentyear = document.querySelector("#currentyear");
const today = new Date()
currentyear.innerHTML =`<span class="highlight">${today.getFullYear()}</span>`;
// LAST MODIFIED
const lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML ="Last Modified: " + lastModified;