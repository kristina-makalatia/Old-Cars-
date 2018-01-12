// navigation

$(document).ready(function(){
  $(".burger-icon").click(function(){
    $(this).toggleClass('open');
  });
});

$(function(){

        $(".burger-icon").click(function() {
          var clicks = $(this).data('clicks');
          if (clicks) {
            closeNav()
          } else {
             openNav()
          }
          $(this).data("clicks", !clicks);
        });

    function openNav() {
   document.getElementById("myNav").style.width = "100%";
           $(".burger-icon").show();
          // $('#navclose').show();
          $('.w3-black').hide();
          $('#logoWhite').hide();
          $('#logoRed').show();
          // $(".closebtn").show();
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
          // $('#navclose').hide();
          $(".burger-icon").show();
          $('.w3-black').show();
          $('#logoWhite').show();
          $('#logoRed').hide();
    }

 $('.overlay-content a').click(function(){
  closeNav();
var that = $(this);
var div = $(that).attr('href');
  $('html,body').animate({
        scrollTop: $(div).offset().top}, 'slow');
});
      });



// slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


//  message sent
function submitClicked(){
  alert('Message Sent!');
  return false; 
}
