'use strict';
var icon = document.getElementById('icon');
var song = document.getElementById('song');
var cd = document.getElementById('cd');
var circle = document.getElementById('circle');
var goodnight = document.getElementById('goodnight');
var menu = document.getElementById('menu');
var progress = document.getElementById('progress');
var loader = document.getElementById('loader');
var music = new Audio();
music.src = 'asset/颜人中 - 晚安.mp3';
var interval;

//播放
icon.addEventListener('click', function() {
  //播放音乐
  music.play();

  //弹出歌曲信息
  song.classList.add('play-song');
  //弹出暂停按钮，隐藏播放按钮
  fadeout(icon);

  fadein(menu);
  menu.classList.add('hide');

  //图片变大
  cd.classList.add('play-cd');
  circle.classList.add('play-circle');
  
  //旋转
  cd.classList.add('rotate');

  cd.classList.add('one');
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
  song.classList.add('transition-song');
  song.classList.remove('play-song');
  //弹出播放按钮，隐藏暂停按钮
  fadeout(menu);

  fadein(icon);

  //停止旋转
  cd.classList.remove('one');
  cd.classList.add('suspend-cd');
  
  //恢复图片原始状态
  var shrink = setTimeout(() => {
    cd.classList.remove('play-cd');
    circle.classList.remove('play-circle');
    cd.classList.add('transition-cd');
    circle.classList.add('transition-circle');
  }, 200);

  //暂停音乐
  music.pause();
});

//结束
music.addEventListener('ended', function() {
  //缩回歌曲信息
  song.classList.remove('play-song');
  song.classList.add('transition-song');
  //弹出播放按钮，隐藏暂停按钮
  fadeout(menu);

  fadein(icon);
  //恢复图片原始状态
  cd.classList.remove('play-cd');
  circle.classList.remove('play-circle');
  cd.classList.add('transition-cd');
  circle.classList.add('transition-circle');
  //清除定时器
  cd.classList.remove('rotate');
});

//淡出
function fadeout(element) {
  var num = 10;
  var disappear = setInterval(() => {
    num--;
    element.style.opacity = num / 10;
    element.style.display = 'none';
    if (num <= 0) {
      clearInterval(disappear);
    }
  }, 100);
}

//淡入
function fadein(element) {
  if (element.style.opacity != 1) {
    var num = 0;
    var appear = setInterval(() => {
      num++;
      element.style.opacity = num / 10;
      element.style.display = 'block';
      if (num >= 10) {
        clearInterval(appear);
      }
    }, 100);
  }
}