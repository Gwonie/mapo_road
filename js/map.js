var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.560081437218535, 126.91270399103416), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커 이미지의 이미지 주소입니다
var imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    // title: positions[i].title,
    // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });

  var content =
    '<div class="customoverlay">' +
    '  <a href="' +
    positions[i].url +
    '" target="_blank">' +
    '    <span class="title">' +
    positions[i].title +
    "</span>" +
    "  </a>" +
    "</div>";

  // 커스텀 오버레이가 표시될 위치입니다
  var position = new kakao.maps.LatLng(37.54699, 127.09598);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: positions[i].latlng,
    content: content,
    yAnchor: 1,
  });
}

var linePath = [];

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
coordinates.forEach((elm) => {
  linePath.push(new kakao.maps.LatLng(elm.lng, elm.lat));
});

var firstCircleOverlay = new kakao.maps.CustomOverlay({
  content: '<span class="dot"></span>',
  position: new kakao.maps.LatLng(coordinates[0].lng, coordinates[0].lat),
  zIndex: 1,
});
var lastCircleOverlay = new kakao.maps.CustomOverlay({
  content: '<span class="dot"></span>',
  position: new kakao.maps.LatLng(
    coordinates[coordinates.length - 1].lng,
    coordinates[coordinates.length - 1].lat
  ),
  zIndex: 1,
});
firstCircleOverlay.setMap(map);
lastCircleOverlay.setMap(map);

var polyline = new kakao.maps.Polyline({
  map: map, // 선을 표시할 지도입니다
  path: linePath, // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
  strokeWeight: 3, // 선의 두께입니다
  strokeColor: "#d95050", // 선의 색깔입니다
  strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
  strokeStyle: "solid", // 선의 스타일입니다
});

polyline.setPath(linePath);
