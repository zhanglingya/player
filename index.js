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
var music = new Audio();
music.src = 'asset/goodnight.mp3';

//播放
icon.addEventListener('click', function() {
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
  }, 300);
});
