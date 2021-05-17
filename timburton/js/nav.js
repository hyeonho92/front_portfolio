  $(document).ready(function() {
   $(".menuOpen").toggle(function() {
	 $(".main_menu").slideDown('slow');
   }, function() {
	 $(".main_menu").slideUp('fast');
   });
   
   
    var current=0;
   $(window).resize(function(){ 
      var screenSize = $(window).width(); 
      if( screenSize > 640){
        $(".main_menu").show();
		 current=1;
      }
      if(current==1 && screenSize < 640){
        $(".main_menu").hide();
         current=0;
      }
    }); 
    
  });
