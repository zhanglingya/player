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
  //点击播放按钮播放音乐
  music.play();

  //点击播放按钮弹出歌曲信息
  song.style.transition = 'all 1s';
  song.style.top = '-75px';

  //弹出暂停按钮，隐藏播放按钮
  fadeout(icon);

  fadein(menu);
  menu.style.right = '10px';
  //点击播放按钮图片变大
  cd.style.transition = 'all 0.5s';
  circle.style.transition = 'all 0.4s';
  cd.style.height = '90px';
  cd.style.width = '90px';
  circle.style.height = '20px';
  circle.style.width = '20px';
  circle.style.top = '15px';
  circle.style.left = '55px';

  //点击播放按钮图片一直旋转
  var rotate = 0;
  var deg = cd.style.transform.replace(/[^0-9]/gi, '');
  interval = setInterval(function() {
    rotate += 1;
    cd.style.transform = 'rotate(' + (rotate +deg)+ 'deg)';
    cd.style.transition = '0.3s linear';
  }, 15);

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
  song.style.transition = 'all 1.5s';
  song.style.top = '10px';
  song.style.overflow = 'hidden';

  //弹出播放按钮，隐藏暂停按钮
  fadeout(menu);

  fadein(icon);

  //清除定时器
  clearInterval(interval);

  //恢复图片原始状态
  var shrink = setTimeout(() => {
    cd.style.height = '75px';
    cd.style.width = '75px';
    circle.style.height = '15px';
    circle.style.width = '15px';
    circle.style.top = '10px';
    circle.style.left = '50px';
  }, 300);

  //暂停音乐
  music.pause();
});

music.addEventListener('ended', function() {
  //缩回歌曲信息
  song.style.transition = 'all 1s';
  song.style.top = '10px';
  song.style.visibility = '0';

  //弹出播放按钮，隐藏暂停按钮
  fadeout(menu);

  fadein(icon);
  //恢复图片原始状态
  cd.style.transition = 'all 0.8s';
  circle.style.transition = 'all 0.6s';
  cd.style.height = '75px';
  cd.style.width = '75px';
  circle.style.height = '15px';
  circle.style.width = '15px';
  circle.style.top = '10px';
  circle.style.left = '50px';

  //清除定时器
  cd.style.transform = 'rotate(0deg)';
  clearInterval(interval);
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
