$(document).ready(function() {


          $('.wp1').waypoint(function() {    //스크롤링시 효과가 발생할 요소의 클래스나 아이디명.
            $('.wp1').addClass('animated fadeInLeft');
          }, {
            offset: '80%'            //스크롤과의 거리
          });
    
          $('.wp2').waypoint(function() {
            $('.wp2').addClass('animated fadeInRight');
          }, {
            offset: '80%'
          });    
    
          $('.wp3').waypoint(function() {
            $('.wp3').addClass('animated fadeInLeft');
          }, {
            offset: '80%'
          });
    
          $('.wp4').waypoint(function() {
            $('.wp4').addClass('animated fadeInRight');
          }, {
            offset: '80%'
          });
    
          $('.wp5').waypoint(function() {
            $('.wp5').addClass('animated fadeInLeft');
          }, {
            offset: '80%'
          });
		  
		 
			  var sticky = new Waypoint.Sticky({
				 element: $('.gnb')[0]
			  });
         
   });