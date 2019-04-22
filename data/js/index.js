var element = document.getElementById("sidebar");
var coll = document.querySelectorAll(".collapsible");
var content = document.querySelectorAll(".content");
var i;

// $(".set").on("hover", function(){
//   if($(this).children().children().nodeName == "SPAN"){
//   }
// });



$(".set").hover(
  function() {
    var pos = $(this).position();

    // console.log($(this).find('.content').text());

    $(".title-onHover").css({
      position: "absolute",
      top: pos.top + 64 + "px",
      left: pos.left + 60 + "px"
    }).fadeIn();
    $(".title-onHover").text($(this).find('span').text());
    // var htmlString = $(this).html();
    // $(this).text( htmlString );
    // if($(this).find())
    // if($(".set").children().children().nodeName == "SPAN"){
    //   console.log("true");
    // }
  }, function() {
    $(".title-onHover").css("display", "none");
    $(".title-onHover").innerHTML = $(this).text();
    
    // $( this ).find( "span:last" ).remove();
  }
);
// $('.set').click(function(){
//   if(!element.classList.contains("show")){
//     document.querySelector(".content").classList.add("show");
//     console.log("show");
//   }
// });

$('#menu').click(function(){
  element.classList.toggle("show");
  $(".set > a").removeClass("active1");
  $(".content").slideUp(200);
  $(".set > a i").removeClass("sort-down1").addClass("sort-up1");
});

// Close the dropdown if the user clicks outside of it
$(window).click(function(event){
  if (!event.target.matches('#menu') && !event.target.matches('.set *')) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
      $(".set > a").removeClass("active1");
      $(".content").slideUp(200);
      $(".set > a i").removeClass("sort-down1").addClass("sort-up1");
    }
  }
});


$(document).ready(function() {
  $(".set > a").on("click", function() {
    if(element.classList.contains('show')){
      if ($(this).hasClass("active1")) { 
        $(this).removeClass("active1");
        $(this).siblings(".content").slideUp(200);
        $(".set > a i").removeClass("sort-down1").addClass("sort-up1");
      } else {
        $(".set > a i").removeClass("sort-down1").addClass("sort-up1");
        $(this).find("i").removeClass("sort-up1").addClass("sort-down1");
        $(".set > a").removeClass("active1");
        $(this).addClass("active1");
        $(".content").slideUp(200);
        $(this).siblings(".content").slideDown(200);
      }
    }
  });
});

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