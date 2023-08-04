var x=document.getElementsByClassName('shop_name');
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("main");
  for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";
    
   
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  
  slides[slideIndex-1].style.display = "block";



  setTimeout(showSlides, 3000); // Change image every 2 seconds

  
}


$(document).ready(function(){

$('#login_form').submit(function(event){

  event.preventDefault();

  var form = $(this);

  var formData = form.serialize();

  var url = form.attr('action');

  $.ajax({

    url:url,

    type:'POST',

    data: formData,

    success : function(request){


      var message = request.message;

      if (message){

        

        $('#invalid').css('display','flex');

        $('.input_text').css('border-color','red');


        setTimeout(function(){

          $('#invalid').css('display','none');

        },2000)
      }


      else{

        var redirect_path = request.redirect_url;

        window.location.pathname = redirect_path;
      }
    }
  });
});

});




