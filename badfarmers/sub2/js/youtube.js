

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    
    var newContent ='';
    newContent += '<h3 class="hidden">비디오 목록</h3>';
    newContent += '<div>';
    newContent += '<ul class="sub_list">';
    for (var i = 0; i < responseObject.list.length; i++) { 
      newContent += '<li>';
      newContent += '<a href="' + responseObject.list[i].link + '" target="cf" > ';
      newContent += '<img src="' + responseObject.list[i].image + '" ';    
      newContent += 'alt="' + responseObject.list[i].title + '" /></a>';
      newContent += '<dl>';    
      newContent += '<dt>' + responseObject.list[i].title + '</dt>';
      newContent += '<dd>' + responseObject.list[i].content + '</dd>';
      newContent += '</dl>';
      newContent += '</li>';
    }
    newContent +='</ul>';
    newContent +='</div>';
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/youtube.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

