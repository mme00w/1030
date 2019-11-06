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



// セクション要素のdata-z属性を取得し、transformを設定
// 最後のセクション要素のdata-zを元に、画面の高さを計算して設定
for(var i = 0; sections.length > i; i++) {
  var itemZ = sections[i].getAttribute('data-z');
  // var itemX = sections[i].getAttribute('data-x');
  // var itemY = sections[i].getAttribute('data-y');
  sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
  // base.style.perspectiveOrigin = itemX + '% ' + itemY + '%';
  if(i === sections.length -1) {
    scrollDiv.style.height = itemZ + window.innerHeight + 'px';
    
  }




}


// スクロールイベントで、#scaler要素のtransformでz軸を動かす
window.addEventListener('scroll', function() {
  scaler.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';

function matrix3dToArray(matrix3d){
  var re = /matrix3d\((.*)\)/;

  if(matrix3d.match(re)) {
    var vals = matrix3d.match(re)[1].replace(/ /g, "").split(",");
  } else {
    return 0
  }

  vals = vals.map(Number)

  var matrix = [new Array(4),new Array(4),new Array(4),new Array(4)];

  matrix[0][0] = vals[0]; 
  matrix[0][1] = vals[1]; 
  matrix[0][2] = vals[2]; 
  matrix[0][3] = vals[3]; 
  matrix[1][0] = vals[4]; 
  matrix[1][1] = vals[5]; 
  matrix[1][2] = vals[6]; 
  matrix[1][3] = vals[7]; 
  matrix[2][0] = vals[8]; 
  matrix[2][1] = vals[9]; 
  matrix[2][2] = vals[10]; 
  matrix[2][3] = vals[11]; 
  matrix[3][0] = vals[12]; 
  matrix[3][1] = vals[13]; 
  matrix[3][2] = vals[14]; 
  matrix[3][3] = vals[15];

  // return matrix; 
  return matrix[3][2];

}

matrix3dToArray($('#scaler').css('transform')) // スクロールイベントで、matrix3dToArrayの呼び出し

// console.log(matrix3dToArray($('#scaler').css('transform')));

var Zscroll=matrix3dToArray($('#scaler').css('transform'));

console.log(Zscroll);

  if(Zscroll >= 2 && Zscroll <= 3){ //Z値が２以上３以下の場合

    var section02x = $('.section-2').getAttribute('data-x') //section-2のdata-xを取得

    var section02y = $('.section-2').getAttribute('data-y') //section-2のdata-yを取得
    
    base.style.perspectiveOrigin = section02x + '% ' + section02y + '%'; 
    //baseのスタイルにperspective-originを、値にsection02xとsection02yを代入

}

});


