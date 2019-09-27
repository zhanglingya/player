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
var first = new Audio();
first.src = 'asset/goodnight.mp3';
var second = new Audio();
second.src = 'asset/May you love me till the end of time.mp3';
var third = new Audio();
third.src = 'asset/hobby.mp3';
var music = [first, second, third];
var index = 0;

//播放
icon.addEventListener('click', function() {
  //播放音乐
  music[index].play();

  //弹出歌曲信息
  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');
  //显示进度条
  music[index].addEventListener('timeupdate', function() {
    var value = (music[index].currentTime / music[index].duration) * 100;
    loader.style.width = value + '%';
  });
  //结束
  music[index].addEventListener('ended', function() {
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

    pauseall();
  });
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
  pauseall();
});

//上一首
upper.addEventListener('click', function() {
  pauseall();

  index--;
  if (index == -1) {
    index = music.length - 1;
  }
  music[index].play();

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');
  //显示进度条
  music[index].addEventListener('timeupdate', function() {
    var value = (music[index].currentTime / music[index].duration) * 100;
    loader.style.width = value + '%';
  });
  
  //结束
  music[index].addEventListener('ended', function() {
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

    pauseall();
  });
});
//下一首
lower.addEventListener('click', function() {
  pauseall();
  index++;
  //如果已经到了最后一首歌就切换到第一首
  if (index > music.length - 1) {
    index = 0;
  }
  music[index].play();

  song.classList.add('advancing-song');

  //弹出暂停按钮，隐藏播放按钮
  icon.classList.add('disappearing');
  menu.classList.add('appearing');

  //光盘旋转变大
  disc.classList.add('advancing-disc');
  cd.classList.add('advancing-cd');

  //显示进度条
  music[index].addEventListener('timeupdate', function() {
    var value = (music[index].currentTime / music[index].duration) * 100;
    loader.style.width = value + '%';
  });
  
  //结束
  music[index].addEventListener('ended', function() {
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

    pauseall();
  });
});

//拖动进度条
progress.addEventListener('click', function(e) {
  var rate = e.offsetX / progress.offsetWidth;
  music[index].currentTime = music[index].duration * rate;
});
//音乐停止
function pauseall() {
  for (var i = 0; i < music.length; i++) {
    if (music[i]) {
      music[i].load();
    }
  }
}
