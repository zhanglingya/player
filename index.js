'use strict';
var icon = document.getElementById('icon');
var song = document.getElementById('song');
var disc = document.getElementById('disc');
var cd = document.getElementById('cd');
var circle = document.getElementById('circle');
var goodnight = document.getElementById('goodnight');
var menu = document.getElementById('menu');
var progress = document.getElementById('progress');
var loader = document.getElementById('loader');
var upper = document.getElementById('upper');
var oso = document.getElementById('one');
var title = document.getElementById('name');
var music = new Audio();


//播放
icon.addEventListener('click', function() {
  music.src = 'https://m10.music.126.net/20190926164112/7d516ab1a9b5c09a2ce71a3014fb1a00/yyaac/0352/0608/015f/486f2af1661b8fb76b0465aff5555cbe.m4a';
  //播放音乐
  music.play();

  //弹出歌曲信息
  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

});
//显示进度条
music.addEventListener('timeupdate', function(){
  var value = (music.currentTime / music.duration) * 100;
  loader.style.width = value + '%';  
});

//拖动进度条
progress.addEventListener('click', function(e) {
  var rate = e.offsetX / progress.offsetWidth;
  music.currentTime = music.duration * rate;
});

//暂停
menu.addEventListener('click', function() {
  //缩回歌曲信息
  song.classList.remove('advancing-song');

  //弹出播放按钮，隐藏暂停按钮
  icon.classList.remove('disappearing');
  menu.classList.remove('appearing');

  //恢复光盘原始状态
  disc.classList.remove('advancing-disc');
  cd.classList.remove('advancing-cd');

  //暂停音乐
  music.pause();
});

//结束
music.addEventListener('ended', function() {
  //缩回歌曲信息
  song.classList.remove('advancing-song');

  //弹出播放按钮，隐藏暂停按钮
  menu.classList.remove('appearing');
  icon.classList.remove('disappearing');

  //恢复图片原始状态
  cd.classList.remove('advancing-cd');

  setTimeout(() => {
    disc.classList.remove('advancing-disc');  
  }, 500);
});

//上一首
upper.addEventListener('click',function(){
  music.src = 'https://m10.music.126.net/20190926162759/eb82385e5b88868a41bdb9819e161f94/yyaac/045d/065f/000e/3728b4f39f158a441a4a7db547b50c30.m4a';
  music.play();

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

  cd.style.backgroundImage = "url('http://p1.music.126.net/HUndbFyGT5_Eiei0pbiK-w==/109951164124732670.jpg?param=177y177')";
  title.innerHTML = '祝你爱我到天荒地老';
  singer.innerHTML = '颜人中/VaVa毛衍七';

});


//下一首
oso.addEventListener('click',function(){
  music.src = 'https://m10.music.126.net/20190926162606/46af6f5b5d7aeeabf119ab26de8f71a7/yyaac/005f/075e/0658/7532ea28d9045e411cbb129c6f654d0f.m4a';
  music.play();

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

  cd.style.backgroundImage = "url('http://p1.music.126.net/J6HaJjtgv-yVVjyUm-h-AA==/109951164373633387.jpg?param=130y130')";
  title.innerHTML = '嗜好';
  singer.innerHTML = '颜人中';
});
