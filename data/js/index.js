var element = document.getElementById("sidebar");
var coll = document.querySelectorAll(".collapsible");
var content = document.querySelectorAll(".content");
var i;
const openMenu = () => {
  element.classList.toggle("show");
  for(i = 0; i < content.length; i++){
    content[i].style.maxHeight = null;
    coll[i].classList.remove("active");
  }
}


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if(element.classList.contains('show')){
      this.classList.toggle("active");
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        this.style.backgroundColor = "";
      } else {
        this.style.backgroundColor = "#00701A";
        content.style.maxHeight = null;
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    }
    else{
      if (content.style.maxHeight){
      }
    }
  });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}

// if(!element.classList.contains('show')){
//   document.addEventListener('DOMContentLoaded', function() {

//     const selector = '.buttons';
//     const elems = Array.from(document.querySelectorAll(selector));
//     const navigation = document.querySelector(".side-menu");

//     function makeActive(evt) {
//       const target = evt.target;

//        if (!target || !target.matches(selector)) {
//          return;
//        }

//       elems.forEach(elem => elem.classList.remove('active'));
//       evt.target.classList.add('active');
//     };

//     navigation.addEventListener('mousedown', makeActive);

//   });
// }