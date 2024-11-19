// JavaScript

const map = L.map('map').setView([33.667829, 130.313121], 15);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//  shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//  });

//  L.marker([33.667829, 130.313121], { icon: whiteIcon }).addTo(map).bindPopup('志賀海神社<br><img src="images/img01.JPG" alt="img">').openPopup();
  
  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.667829, 130.313121], { icon: whiteIcon }).addTo(map).bindPopup('志賀島！');
  L.marker([33.620734, 130.305301], { icon: pinkIcon }).addTo(map).bindPopup('能古島！');

  const circle = L.circle([33.667829, 130.313121], {
    color: 'white', //円の輪郭線の色
    fillColor: 'white', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);
  circle.bindPopup("半径1kmの範囲");

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

// 多角形の表示
const polygon = L.polygon([
  [33.638061, 130.301886],
  [33.634988, 130.298023],
  [33.626055, 130.299654],
  [33.617478, 130.295019],
  [33.607328, 130.299654],
  [33.608758, 130.307808],
  [33.612689, 130.311413],
  [33.621409, 130.313215],
  [33.629628, 130.307121],
  [33.635131, 130.307808]
], {
  color: 'pink',
  fillColor: 'pink',
  fillOpacity: 0.3
}).addTo(map);