var venueMap;
function init() {

  var pinLocation = new google.maps.LatLng(37.521789, 127.021049);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [
      {
        stylers: [
          { hue: "#000" },  //지도 전체의 색상
          { saturation: 37 }  //전체 지도의 포화 (-100~100)
        ]
      }, {
        featureType: "road",  //도로의 기능
        elementType: "geometry",  //도로의 형태
        stylers: [
          { lightness: 100 },  //도로의 밝기
          { visibility: "simplified" }  //도로의 상세정도  on(보임) . off(안보임) , simplified(간단)
        ]
      }, {
        featureType: "transit",  //대중교통 기능
        elementType: "geometry",  //해당 기능의 형
        stylers: [
          { hue: "#ff6600" },  //대중교통 경로색
          { saturation: +80 } 
        ]
      }, {
        featureType: "transit",   //대중교통 기능
        elementType: "labels",  //대중교통 레이블
        stylers: [
          { hue: "#ff0066" },    //대중교통 레이블 색
          { saturation: +80 }
        ]
      }, {
        featureType: "poi", 
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var startPosition = new google.maps.Marker({    // Create a new marker
    position: pinLocation,                        // Set its position
    map: venueMap,                                // Specify the map
    icon: "images/go.png"                            // Path to image from HTML
  });

}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;