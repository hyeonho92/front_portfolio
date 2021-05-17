 $(document).ready(function(){
  var cnt=3; //탭의 개수 ***
    
  $('.tabs .contlist:eq(0)').show(); // 첫번째 단락을 보이고 시작하자
  $('.tabs .tab1 ul').css('display','block'); //첫번째 메뉴바를 활성화 하고 시작하자
  
  $('.tabs .tab').each(function (index) {
    $(this).click(function(){    //여기까지 두줄이 3개를 전부 묶어준 그런 상황? 클릭하면 0 1 2
	  $(".tabs .contlist").hide(); //모든 내용 보이지마
	  $(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 내용만 보여
	  /*for(var i=1;i<=cnt;i++){ //모든 버튼을 똥색으로 비활성화
           $('.tab'+i).css('background','url(images/tab'+i+'.jpg)');
      }
      $(this).css('background','url(images/tab'+(index+1)+'on.jpg)'); */
   });//해당 버튼만 활성화
  });
});