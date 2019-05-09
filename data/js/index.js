var element = document.getElementById("sidebar");
var coll = document.querySelectorAll(".collapsible");
var content = document.querySelectorAll(".content");
var i;

// $('.set').click(function() {
//   var pos = $(this).position();// distance from left of the document
//   console.log($(this).find('span').text());
//   console.log($('.onClickMenu').find('.menuTitle').text());

//   if($(this).find('span').text() == $('.onClickMenu').find('span').text()){
//     console.log($(this).find('.content1').text());
//     $('.onClickMenu').css({
//       top : pos.top + 55 + 'px',
//       left: pos.left + 55 + 'px'
//     }).fadeIn(500);
//   }
// });

// $(document).ready(function(e) {
//   $('.set').click(function() {
//     var pos = $(this).position();
//     $('.onClickMenu').css({
//         top : pos.top + 35 + 'px',
//         left: pos.left + 55 + 'px'
//     }).fadeIn(500);
//   });
// });




$("input#ufile").change(function() {
  $("#output").empty();
  var ele = document.getElementById($(this).attr('id'));
  var result = ele.files[0].name;
  $(".infoText").hide();
  $("#output").show();
  $("#output").append(result);
});

$(document).ready(function() {
  $('#cancelUpload').click( function(){
    $(".infoText").show();
    $('input#ufile').val('');
    $("#output").hide();
  });
});



$('.set').click(function(){
  // console.log($('.onClickMenu').hasClass($(this).find('span').text()));
  var pos = $(this).position();
  if(element.classList.contains('show')){

  }
  else{
    var itemClassName = $(this).find('span').text().trim();
    if($('.onClickMenu').hasClass(itemClassName)){
      console.log($(this).find('span').text());
      $(".onClickMenu").fadeOut(500);
      $('.' + itemClassName).css({
          top : pos.top + 35 + 'px',
          left: pos.left + 55 + 'px'
      }).fadeIn(500);
    }
  }
});

$(document).ready(function(e) {
  $('.categoryBtn').click(function() {
      var pos = $(this).position();// distance from left of the document
      console.log(pos);
      $('.drpdwnElement').css({
        'display': 'block',
        top : pos.top + -15 + 'px',
        left: pos.left + 0 + 'px'
      });
      console.log($(this).text());
      if($(this).text() == $('.drpdwnElement').text()){
        $('.drpdwnElement li').css('background', "#ddd");
      } 
  });
  $('.drpdwnElement button').click(function() {
    console.log($(this).text());
    
  });
});


$(".set").hover(
  function() {
    var pos = $(this).position();
    if (!element.classList.contains('show')) {
    $(".title-onHover").css({
      top: pos.top + 64 + "px",
      left: pos.left + 60 + "px"
    }).fadeIn();
  }
    $(".title-onHover").text($(this).find('span').text());
  }, function() {
    $(".title-onHover").css("display", "none");
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
  if (!event.target.matches('.categoryBtn')) {
    $('.drpdwnElement').css({
      'display': 'none'
    })
  };
}

window.onload = function(){
  document.onclick = function(e){
     if(!e.target.matches(".set img")){
      $(".onClickMenu").fadeOut(500);
     }
  };
};