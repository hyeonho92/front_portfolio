 $(document).ready(function() {
     
   
   $("#btn1").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    $("#nav").fadeIn('slow');
    $(".box").fadeIn();
   });
   
   $(".box,.mclose").click(function() {
     $("#nav").fadeOut('fast');
     $(".box").fadeOut();
   });
   
  });