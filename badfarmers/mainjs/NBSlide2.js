// JavaScript Document
$(document).ready(function() {
   var position=0;  //최초위치
   var movesize=275; //이미지 하나의 너비
   var timeonoff;

     timeonoff= setInterval(function () {
            position-=movesize;  // 150씩 감소
    	$('.contlist2').stop().animate({left:position}, 'fast',
	         function(){							
		    if(position==-1375){
			   $('.contlist2').css('left',0);
			   position=0;
		    }
	 });
     }, 2000);
    

    
   
    $('.contlist2 ul').after($('.contlist2 ul').clone());
        //슬라이드 겔러리를 한번 복제

     $('.button').click(function(event){
	var $target=$(event.target);
         clearInterval(timeonoff);
	
	if($target.is('.m1')){//왼쪽 버튼 클릭시
	     if(position==-1375){
	         $('.contlist2').css('left',0);
	          position=0;
	      }
		
	     position-=movesize;  // 150씩 감소
    	     $('.contlist2').stop().animate({left:position}, 'fast',
		  function(){							
		    if(position==-1375){
			   $('.contlist2').css('left',0);
			   position=0;
		    }
	      });
	}else if($target.is('.m2')){//오른쪽 버튼 클릭시
	      if(position==0){
	           $('.contlist2').css('left',-1375);
	           position=-1375;
                   }

                   position+=movesize; // 150씩 증가
    	      $('.contlist2').stop().animate({left:position}, 'fast',
		  function(){							
		    if(position==0){
			   $('.contlist2').css('left',-1375);
			   position=-1375;
		    }
	       });
	}
       });
    });


