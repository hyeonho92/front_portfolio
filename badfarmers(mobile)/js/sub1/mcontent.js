 $(document).ready(function() {
     
   
   $("#mgn1").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	var stop1=$(this).offset().top;
        
    $(".mgn1").css('top','stop1');
    $(".mgn1").fadeIn('slow');
    $(".box").fadeIn();
   });
   
     $("#mgn2").click(function() {
      var documentHeight =  $(document).height();
     $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
     var stop1=$(this).offset().top;
      $(".mgn2").css('top',stop1-50);   
      $(".mgn2").fadeIn('slow');
      $(".box").fadeIn();
   });
    $("#mgn3").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn3").css('top',stop1-50);
    $(".mgn3").fadeIn('slow');
    $(".box").fadeIn();
   });
    $("#mgn4").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn4").css('top',stop1-50);
    $(".mgn4").fadeIn('slow');
    $(".box").fadeIn();
   });
    $("#mgn5").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn5").css('top',stop1-50);
    $(".mgn5").fadeIn('slow');
    $(".box").fadeIn();
   });
    $("#mgn6").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn6").css('top',stop1-50);
    $(".mgn6").fadeIn('slow');
    $(".box").fadeIn();
   });
    $("#mgn7").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn7").css('top',stop1-50);
    $(".mgn7").fadeIn('slow');
    $(".box").fadeIn();
   });
    $("#mgn8").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn8").css('top',stop1-50);
    $(".mgn8").fadeIn('slow');
    $(".box").fadeIn();
   });
     $("#mgn9").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn9").css('top',stop1-50);
    $(".mgn9").fadeIn('slow');
    $(".box").fadeIn();
   });
     $("#mgn10").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn10").css('top',stop1-50);
    $(".mgn10").fadeIn('slow');
    $(".box").fadeIn();
   });
     $("#mgn11").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn11").css('top',stop1-50);
    $(".mgn11").fadeIn('slow');
    $(".box").fadeIn();
   });
   $("#mgn12").click(function() {
      var documentHeight =  $(document).height();
    $(".box").css('height',documentHeight);
     //$("#nav").css('height',documentHeight);
 	
    var stop1=$(this).offset().top;
      $(".mgn12").css('top',stop1-50);
    $(".mgn12").fadeIn('slow');
    $(".box").fadeIn();
   });
    
   
   $(".box,.mclose").click(function() {
     $(".mgn").fadeOut('fast');
     $(".box").fadeOut();
   });
   
  });