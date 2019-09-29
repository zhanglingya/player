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
var lower = document.getElementById('lower');
var title = document.getElementById('name');
var singer = document.getElementById('singer');
var music = new Audio();
var voice = ['asset/goodnight.mp3', 'asset/May you love me till the end of time.mp3', 'asset/hobby.mp3'];
var vocal = ['晚安', '祝你爱我到天荒地老', '嗜好'];
var pepole = ['颜人中', '颜人中/VaVa毛衍七', '颜人中'];
var img = [
  'url(http://p2.music.126.net/8N1fsMRm2L5HyZccc6I3ew==/109951164007377169.jpg?param=130y130)',
  'url(http://p1.music.126.net/HUndbFyGT5_Eiei0pbiK-w==/109951164124732670.jpg?param=177y177)',
  'url(http://p1.music.126.net/J6HaJjtgv-yVVjyUm-h-AA==/109951164373633387.jpg?param=130y130)'
];
var index = 0;

//播放
icon.addEventListener('click', function() {
  //播放音乐

  music.src = voice[index];
  music.play();
  title.innerHTML = vocal[index];
  singer.innerHTML = pepole[index];
  cd.style.backgroundImage = img[index];
  //弹出歌曲信息
  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');
});

//上一首
upper.addEventListener('click', function() {
  music.load();

  index--;
  if (index == -1) {
    index = voice.length - 1;
  }
  music.src = voice[index];
  music.play();
  title.innerHTML = vocal[index];
  singer.innerHTML = pepole[index];
  cd.style.backgroundImage = img[index];

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

  loader.style.width = '0%';
});

//下一首
lower.addEventListener('click', function() {
  music.load();

  index++;
  //如果已经到了最后一首歌就切换到第一首
  if (index > voice.length - 1) {
    index = 0;
  }
  music.src = voice[index];
  
 
  title.innerHTML = vocal[index];
  singer.innerHTML = pepole[index];
  cd.style.backgroundImage = img[index];

  music.play();

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

  loader.style.width = '0%';
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

//拖动进度条
progress.addEventListener('click', function(e) {
  var rate = e.offsetX / progress.offsetWidth;
  music.currentTime = music.duration * rate;
});
//显示进度条
music.addEventListener('timeupdate', function() {
  var value = (music.currentTime / music.duration) * 100;
  loader.style.width = value + '%';
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

  music.pause();
});
