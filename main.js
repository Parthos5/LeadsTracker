const savebtn = document.getElementById("save");
let myleads = [];
const input = document.getElementById("inputtab");
const ulel = document.getElementById("ulel");
let listitems = "";
const copy = document.getElementById("copy");

savebtn.addEventListener("click", function(){ 
   myleads.push(input.value);
   input.value = "";
   ulel.innerHTML += `
   <li>
    <a href='${myleads[myleads.length - 1]}' target='_blank'>
     ${myleads[myleads.length - 1]}
      </a> 
   </li>
   `
})

input.addEventListener("keypress",function(event)
{
  if(event.key === "Enter")
  {
    myleads.push(input.value);
   input.value = "";
   ulel.innerHTML += "<li>" + "<a href='"+myleads[myleads.length - 1]+" target='_blank''>" + myleads[myleads.length - 1]  + "</a>" + "</li>"; 
  }
})