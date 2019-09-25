'use strict';
var icon = document.getElementById('icon');
var song = document.getElementById('song');
var disc = document.getElementById('disc');
var circle = document.getElementById('circle');
var goodnight = document.getElementById('goodnight');
var menu = document.getElementById('menu');
var progress = document.getElementById('progress');
var loader = document.getElementById('loader');
var music = new Audio();
music.src = 'asset/颜人中 - 晚安.mp3';
var interval;
var big;

//播放
icon.addEventListener('click', function() {
  //播放音乐
  music.play();

  //弹出歌曲信息
  song.classList.add('play-song');

  //弹出暂停按钮，隐藏播放按钮
  fadeout(icon);
  fadein(menu);

  menu.classList.remove('fade-out');
  icon.classList.remove('fade-in');
  menu.classList.add('hide');

  //图片变大
  big = setInterval(() => {
    disc.classList.add('play-disc');
  }, 200);
  

  //旋转
  disc.classList.add('rotate');
  disc.classList.add('running');
  
  //进度条
  music.addEventListener('timeupdate', show, false);

  //显示进度条
  function show() {
    var value = (music.currentTime / music.duration) * 100;
    loader.style.width = value + '%';
  }

  //拖动进度条
  progress.addEventListener('click', function(e) {
    var rate = e.offsetX / progress.offsetWidth;
    music.currentTime = music.duration * rate;
    show();
  });
});

//暂停
menu.addEventListener('click', function() {
  //缩回歌曲信息
  song.classList.remove('play-song');

  //弹出播放按钮，隐藏暂停按钮
  menu.classList.remove('fade-in');
  icon.classList.remove('fade-out');
  fadeout(menu);
  fadein(icon);

  //停止旋转
  disc.classList.remove('running');
  disc.classList.add('suspend-disc');

  //恢复图片原始状态
  clearInterval(big);
  var shrink = setTimeout(() => {
    disc.classList.remove('play-disc');
  }, 200);

  //暂停音乐
  music.pause();
});

//结束
music.addEventListener('ended', function() {
  //缩回歌曲信息
  song.classList.remove('play-song');;
  //弹出播放按钮，隐藏暂停按钮

  menu.classList.remove('fade-in');
  icon.classList.remove('fade-out');
  fadeout(menu);

  fadein(icon);
  //恢复图片原始状态
  disc.classList.remove('play-disc');
  //清除定时器
  disc.classList.remove('rotate');
});

//淡出
function fadeout(element) {
  var num = 10;
  var disappear = setInterval(() => {
    num--;
    element.classList.add('fade-out');
    if (num <= 0) {
      clearInterval(disappear);
    }
  }, 40);
}
//淡入
function fadein(element) {
    var num = 0;
    var appear = setInterval(() => {
      num++;
      element.classList.add('fade-in');
      if (num >= 10) {
        clearInterval(appear);
      }
    }, 40); 
}