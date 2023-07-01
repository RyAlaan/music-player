// Declaration

// HOME
import songs from "./data.js";

const display = document.querySelector(".songs");

for (let i = 0; i < songs.length; i++) {
  console.log(songs[i].title);

  let li = document.createElement("li");
  li.className = "pt-2";

  let divLiList = document.createElement("div");
  divLiList.className = `divLiList ${i} h-14 text-text flex items-center space-x-4 rounded-lg px-3 hover:bg-secondairy cursor-pointer`;
  divLiList.setAttribute("data-list", i);

  let number = document.createElement("number");
  number.className = "number items-center w-3 text-right";
  number.innerHTML = i + 1;

  let img = document.createElement("img");
  img.className = "w-12";
  img.src = songs[i].cover;

  let divData = document.createElement("div");
  divData.className = "overflow-hidden text-ellipsis whitespace-nowrap";

  let song = document.createElement("h2");
  song.innerHTML = songs[i].title;
  song.className = "text-white";

  let singer = document.createElement("p");
  singer.innerHTML = songs[i].singer;

  let grow = document.createElement("div");
  grow.className = "grow";

  let time = document.createElement("p");
  time.innerHTML = songs[i].duration;

  divData.appendChild(song);
  divData.appendChild(singer);

  divLiList.appendChild(number);
  divLiList.appendChild(img);
  divLiList.appendChild(divData);
  divLiList.appendChild(grow);
  divLiList.appendChild(time);

  li.appendChild(divLiList);

  display.appendChild(li);
}

const home = document.querySelector(".home");
const player = document.querySelector(".player");
const divLiList = document.querySelectorAll(".divLiList");

divLiList.forEach((divLi) => {
  divLi.addEventListener("click", () => {
    player.classList.toggle("hidden");
    home.classList.toggle("hidden");

    let currentMusic = divLi.getAttribute("data-list");
    setMusic(currentMusic);
    playBtn.click();
  });
});

// Player
let currentMusic = divLiList[0].getAttribute("data-list");

const music = document.querySelector("#audio");

const seekBar = document.querySelector("#seekBar");
const title = document.querySelector("#title");
const singer = document.querySelector("#singer");
const cover = document.querySelector("#cover");
const currentMusicTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".duration");

const forwardBtn = document.querySelector("i.fa-forward-step");
const backwardBtn = document.querySelector("i.fa-backward-step");
const pauseBtn = document.querySelector("i.fa-pause");
const playBtn = document.querySelector("i.fa-circle-play");
const repeatBtn = document.querySelector("i.fa-repeat");
const shuffleBtn = document.querySelector("i.fa-shuffle");

// Play Pause button
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
});

pauseBtn.addEventListener("click", () => {
  music.pause();
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
});

// forward backward btn
forwardBtn.addEventListener("click", () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playBtn.click();
});

backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playBtn.click();
});

// Setting up music
const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.audio;
  cover.src = song.cover;
  title.innerHTML = song.title;
  singer.innerHTML = song.singer;

  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300);
};

setMusic(0);

// Format time
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0` + min;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0` + sec;
  }
  return `${min}:${sec}`;
};

// seek bar event
setInterval(() => {
  seekBar.value = music.currentTime;
  currentMusicTime.innerHTML = formatTime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
    if (repeatBtn.classList.contains("active")) {
      console.log("contain");
      setMusic(currentMusic);
      playBtn.click();
    } else if (shuffleBtn.classList.contains("active")) {
      setMusic(shuffleFunc());
      playBtn.click();
    } else {
      forwardBtn.click();
    }
  }
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});

// Repeat Button
repeatBtn.addEventListener("click", () => {
  repeatBtn.classList.toggle("active");
  shuffleBtn.classList.remove("active");
});

// Shuffle Button
shuffleBtn.addEventListener("click", () => {
  shuffleBtn.classList.toggle("active");
  repeatBtn.classList.remove("active");
});

const shuffleFunc = () => {
  let number = Math.floor(Math.random() * songs.length);
  return number;
};
