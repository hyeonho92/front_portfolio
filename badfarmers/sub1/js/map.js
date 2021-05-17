// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.521841, 127.021124);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"배드파머스 신사동점"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content:"배드파머스 서울특별시 강남구 신사동 523-21"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
  initialize2();
 }
 
 //두번째지도
 function initialize2() {
  var myLatlng = new google.maps.LatLng(37.508986, 127.059941);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"회사소개"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content:"현대백화점 서울특별시 강남구 삼성동 159-7"
  });
 
  infowindow.open(map,marker);
 }
 
 
 
 
 
 
 window.onload=function(){
  
  initialize();
  initialize2();
 }



 
 
 
 window.onload=function(){

  initialize();
  initialize2();
 }


