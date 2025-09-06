const input = document.querySelector("#favChap");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener('click',function(){
  if (input.value.trim() !== ""){
const li = document.createElement("li");
const deleteBtn = document.createElement("button");
     
li.textContent = input.value;
deleteBtn.textContent = "X"
list.appendChild(li);
li.appendChild(deleteBtn);
deleteBtn.setAttribute('class', 'delete');

li.addEventListener('click', function(e){
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentElement;
  list.removeChild(li);
  
  }
});
 input.value = ""
 input.focus();
}

});