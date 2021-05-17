<script type="text/javascript"> 
 function initialize() {
  var myLatlng = new google.maps.LatLng(37.896768,127.046413);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"류헤어"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "경기도 동두천시 지행동 1번지  송내주공2단지 상가1층"
  });
 
  infowindow.open(map,marker);
 }
 
 
 //두번째 지도
  function initialize2() {
  var myLatlng = new google.maps.LatLng(37.556911,126.918694);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"거시기"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "자시기"
  });
 
  infowindow.open(map,marker);
 }
 
 
 
 
 
 
 window.onload=function(){
  initialize();
  initialize2();
 }
</script>