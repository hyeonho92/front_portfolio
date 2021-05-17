
 $(document).ready(function() {
      //$('ul.dropdownmenu li ul').hide();
      //$('.menu_box').hide();

      $('ul.dropdownmenu').hover(
         function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();});
             
            $('#header').animate({height:190},'fast'); 
         },
        function() {
             $('ul.dropdownmenu li.menu ul').fadeOut('fast');
             $('.bar').fadeOut('fast');  
            
            $('#header').animate({height:50},'fast'); 
       });

     
       $('ul.dropdownmenu li.menu').hover(
         function() { 
            $('.depth1', this).animate({top:-22},'fast').clearQueue();
             
             var ind=$(this).index();
             $('.bar').fadeIn('fast',function(){$(this).stop();});
             $('.bar').animate({left:166*(ind)},'fast')
             
         },
        function() {
           $('.depth1', this).animate({top:0},'fast').clearQueue();
            
             
       });
     
     
     //tab키 처리
   $('ul.dropdownmenu li.menu .depth1').bind('focus', function () {        
                $('ul.dropdownmenu li.menu ul').slideDown('normal');
              $('#header').animate({height:190},'fast'); 
      });

     $('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
              $('ul.dropdownmenu li.menu ul').slideUp('fast');
           $('#header').animate({height:50},'fast'); 
     });

     
});













