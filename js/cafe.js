window.onload = function(){
  // プリロードする画像
  var images = [
		'./images/img1-0.jpg','./images/img1-1.jpg',
		'./images/img1-2.jpg','./images/img1-3.jpg',
    './images/img2-0.jpg','./images/img2-1.jpg',
		'./images/img2-2.jpg','./images/img2-3.jpg',
		'./images/img3-0.jpg','./images/img3-1.jpg',
		'./images/img3-2.jpg','./images/img3-3.jpg'
  ];
  // プリロード
  for (i = 0; i < images.length; i++){
    var img = document.createElement('img');
    img.src = images[i];
  }
}
var image = [
				{ src: './images/img2-2.jpg'},
				{ src: './images/img14.jpg'},
				{ src: './images/img35.jpg'}
			];
$('#slider').vegas({
		overlay: false,//網線ドット
		transition: 'blur',
		transitionDuration: 2000,//切り替わり時間
		delay: 5500,//スライド間の遅延をミリ秒単位で。
		animationDuration: 5500,//スライドアニメーション時間
		animation: 'kenburns',
		slides: image,//画像
		timer:false,
	});

	//スクロール発火イベント
window.addEventListener("scroll",function(){
  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  if( scroll > 900 ){
    $("#waku").css("border","solid 5px #2C2D2D");
		$(".nav-a span").css("color","#333333");
		$(".nav-a").addClass('act');
  }else{
    $("#waku").css("border","solid 5px #fff");
		$(".nav-a span").css("color","#fff");
		$(".nav-a").removeClass('act');
  }
});

let speed = 500;
$("#concept").click(function(){
	$("html,body").animate(
		{scrollTop:$('#T01').offset().top + 40},speed);
});
$("#menu").click(function(){
	$("html,body").animate(
		{scrollTop:$('#T02').offset().top + 40},speed);
});
$("#access").click(function(){
	$("html,body").animate(
		{scrollTop:$('#T03').offset().top},speed);
});
$("#top").click(function(){
	$("html,body").animate(
		{scrollTop:0},speed);
});

function splitChildren($obj){
  let ret = [];
  let children = $obj[0].childNodes;//←子要素のこと
  for (let child of children) {
		//for(変数 of 配列)→配列の値を一つずつ変数に格納
    ret.push($(child));
  }
  return ret;//子要素だけ入ったret[]配列を返す
}

function replaceText($obj, substr, newSubstr, isRecursive) {
  var isRecursive = (isRecursive !== undefined) ? isRecursive : false;
	//変数 = 条件 ? 値1:値2; 条件に当てはまるなら1を代入
	//undefinedの時 falseに
	  $obj.each(function() {
			//その文字列に繰り返し処理
    let $children = splitChildren($(this));
		//↑の関数にかけたものを$childrenに代入
    for (let $child of $children){

    if($child.prop('tagName')){
			//spanとかが子要素にあったら
         if(isRecursive){
    replaceText($child, substr, newSubstr, true);
          }else{/* ↑子要素なので何もせずに通す*/
          }
      }else{//子要素じゃないやつ
        $child[0].nodeValue = $child[0].nodeValue.replace(substr, newSubstr);//直接書き換え
      }
		 }//for終了
  });
 }

 let menu1 =[
 	{ name:'ふわふわクロワッサン', price:'250'},
 	{ name:'エスプレッソコーヒー', price:'200'},
 	{ name:'イチゴのショートケーキ', price:'450'},
 	{ name:'和栗モンブラン', price:'420'}
	 ];
 let menu2 =[
 	{ name:'カラフルマカロン', price:'300'},
 	{ name:'あったかパンケーキ', price:'220'},
 	{ name:'ベーコンエッグトースト', price:'500'},
 	{ name:'ハンバーグセット', price:'550'}
   ];
 let menu3 =[
 	{ name:'濃厚トマトパスタ', price:'560'},
 	{ name:'ミニハンバーガーセット', price:'600'},
	{ name:'満点モーニングセット', price:'400'},
	{ name:'マルゲリータピザ', price:'980'}
  ];
 var kesi = $('.sid_img_area');
 var kakikae = $('.sid_img_area');
 let mode = 1;

 const $img = document.getElementsByClassName('m-img');
 const $txt = document.getElementsByClassName('m-txt');
 const $yen = document.getElementsByClassName('m-yen');
$("#more").click(function(){

	kesi.effect('blind',{direction:'horizontal', mode:'hide', easing: 'easeInExpo'},1000).effect('blind',{direction:'horizontal', mode:'show', easing: 'easeInExpo'},1000);

setTimeout(function(){

	if(mode == 1){
		mode++;
		for (var i = 0; i < 4; i++) {
		 $img[i].src='images/img2-' + i + '.jpg';
     $txt[i].innerHTML = menu2[i].name;
		 replaceText($('#m-yen' + i), menu1[i].price, menu2[i].price);
		}
		}else if(mode == 2){
			mode++;
			for (var j = 0; j < 4; j++) {
			 $img[j].src='images/img3-' + j + '.jpg';
	     $txt[j].innerHTML = menu3[j].name;
			 replaceText($('#m-yen' + j), menu2[j].price, menu3[j].price);
			}
		}else if(mode == 3){
			 mode = 1;
			for (var k = 0; k < 4; k++) {
			 $img[k].src='images/img1-' + k + '.jpg';
			 $txt[k].innerHTML = menu1[k].name;
			 replaceText($('#m-yen' + k), menu3[k].price, menu1[k].price);
			}
		}
	},1000);
});

/////////////オーバーレイ/////////////////
$('#pon').click(function(){
  $('#Fkuti').attr('src','images/kuti.png');
  $('#Feye').attr('src','images/eye.png');

  if($('.qr-zone').css('display') == 'none'){
  $('#serif').text("  いらっしゃいませー！クーポンはいかがですか？");
   }

   $('.pon-wrap').css('z-index','2000').effect('blind',{mode:'show'},500);
})

$('#pon-go').click(function(){
  $('#Fkuti').attr('src','images/kutitozi.png');
  $('#serif').text("・・・");
  $('.pon-bun').fadeOut(500);
  $('#pon-go').fadeOut(500);
  setTimeout(function(){
  $(".knife").animate({left:'17%'},500);
},500);
  setTimeout(function(){
  $(".hole").animate({width:'42vw'},500);
  $(".knife").animate({left:'57%',top:'71.8%'},500);
},1500);

setTimeout(function(){
  $('#ponIn-link').addClass("ponIn");
  $('.ponIn').on('animationend', function (){
    $('#ponIn-link').addClass("Cfuwa");
    $('#qr-zone').fadeIn(500);
    $('#Fkuti').attr('src','images/kuti.png');
    $('#serif').text("ぜひお使いになってくださいね！");
    $('.kirakira').children('img').fadeIn(200);
    $('#kira1').addClass("kira1");
    $('#kira2').addClass("kira2");
    });
},2300);

})

$('#batu-btn').click(function(){
    $('#serif').text("またお越しくださいねー！");
    $('#Feye').attr('src','images/smile.png');
  setTimeout(function(){
   $('#pon-wrap').effect('blind',{mode:'hide'},400);
 },1300);
})
/////////////apng/////////////////
APNG.ifNeeded().then(function(){
var images = document.querySelectorAll(".apng-image");
for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
});
