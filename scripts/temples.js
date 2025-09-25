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

date = new Date();
year.textContent = date.getFullYear();

const lastModified = new Date (document.lastModified)
document.querySelector("#lastModified").innerHTML ="Last Modified: " + lastModified;




// let scores = [100, 72, 83, 94, 88, 87];
// let accumulator = 0;
// let count = 0;
// scores.forEach(score => {
//   if (score > 87) {
//     accumulator += score;
//     count ++;
//   }
// });
// if ( count > 0 ) {
//   console.log(accumulator/count); 
// } else {
//   console.log("No scores reported.");
// }