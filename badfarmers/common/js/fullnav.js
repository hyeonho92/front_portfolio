// JavaScript Document
$(document).ready(function() {
  //$('ul.dropdownmenu li ul').hide();
  $('ul.dropdownmenu li.menu').hover(
  function() { 
    $('ul', this).fadeIn('normal',function(){$(this).stop();});
    
  },function() {
   
    $('ul', this).fadeOut('fast');
 });
    
  //tab 처리 코드
$('ul.dropdownmenu li.menu .depth1').bind('focus', function (){  $(this).parents('.menu').find('ul').fadeIn('fast');
 $(this).parents('.menu').siblings().find('ul').fadeOut('fast');
});

$('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
    $('ul.dropdownmenu li.m6 ul').fadeOut('fast');
});
    
    
 // var submenu_width=$('.gnb').width();
      
  $(window).on("scroll",function(){
    //$('.gnb').css('margin-left',-submenu_width/2);
       //$('.gnb').css('width',submenu_width);
    //변수 scroll에 현재 문서가 스크롤된 거리 저장
    var scroll = $(window).scrollTop();
      
    if(scroll>=350){
       $('.gnb').addClass('menuScroll');
    }else{
       $('.gnb').removeClass('menuScroll'); 
    }

   });
  
    
    
    
    
});