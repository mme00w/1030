// スクロール量を取得する要素を取得
var scrollElm = (function() {
  if('scrollingElement' in document) {
    return document.scrollingElement;
  }
  if(navigator.userAgent.indexOf('WebKit') != -1) {
    return document.body;
  }
  return document.documentElement;
})();

// 全てのセクション要素を取得
var sections = document.querySelectorAll('.section');

// 全体をz方向に動かす#scaler要素を取得
var scaler = document.getElementById('scaler');

// 画面の高さを設定する#scroll要素を取得
var scrollDiv = document.getElementById('scroll');

var base = document.getElementById("base");

// var getZ = window.getComputedStyle(scaler, null).getPropertyValue('transform');
// var props2 = $('#scale').css('transform');
// console.log(getZ); transform値を取得しようとしたもののうまくいかなかったコード達です

var getZ = window.getComputedStyle(scaler, null);
console.log(getZ);
// getZ.transform[226]でトランスフォーム

//色々試したもののうまくいかなかったコードを一応置いてます↓

// var getZ = window.getComputedStyle(scaler, null).getPropertyValue('transform');
// console.log(getZ);

// var props2 = $('#scale').css('transform');
// console.log(transform3d_value(props2));

// let re_mat3d = /^matrix3d\((.*)\)$/, m = matrix3d.match(re_mat3d)
// ;
// if( m ) {
//   // m を行列（Array）に矯正
//   m = m[1].split(/,\s*/).map( n => Number(n) )
//   console.log( m ) // 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3.88, 1
// }


// セクション要素のdata-z属性を取得し、transformを設定
// 最後のセクション要素のdata-zを元に、画面の高さを計算して設定
for(var i = 0; sections.length > i; i++) {
  var itemZ = sections[i].getAttribute('data-z');
  var itemX = sections[i].getAttribute('data-x');
  var itemY = sections[i].getAttribute('data-y');
  sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
  base.style.perspectiveOrigin = itemX + '% ' + itemZ + '%';
  if(i === sections.length -1) {
    scrollDiv.style.height = itemZ + window.innerHeight + 'px';
    
  }
}

// for(var i = 0; sections.length > i; i++) {
//   var itemZ = sections[i].getAttribute('data-z');
//   var itemX = sections[i].getAttribute('data-x');
//   var itemY = sections[i].getAttribute('data-y');
//   sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
//   base.style.perspectiveOrigin = itemX + '% ' + itemZ + '%';
//   if(i === sections.length -1) {
//     scrollDiv.style.height = itemZ + window.innerHeight + 'px';
    
//   }
// }


// スクロールイベントで、#scaler要素のtransformでz軸を動かす
window.addEventListener('scroll', function() {
  scaler.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';
});
