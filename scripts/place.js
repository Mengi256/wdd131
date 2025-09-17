const year = document.querySelector("#date");
const lastModified = (document.lastModified);
document.querySelector("#lastModified").innerHTML ="Last Modified: " + lastModified;


today = new Date ()
 year.textContent = today.getFullYear();
