// receive url
import { data } from "./data.js";

// const urlParams = new URLSearchParams(window.location.search);
// const id = parseInt(urlParams.get("id"));
// const href = `player.html?id=`;

// Fetch data from JSON file
// fetch("./src/data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     music.src = data[id].audio;
//     cover.src = data[id].cover;
//     song.innerHTML = data[id].song;
//     singerinnerHTML = data[id].singer;
//   })
//   .catch((error) => {
//     console.error("Error fetching JSON data:", error);
//   });
  

// music

let currentMusic = 0;

const music = document.querySelector("#audio-source");

const cover = document.querySelector("#cover");
const title = document.querySelector("#song");
const singer = document.querySelector("#singer");
const seekBar = document.querySelector("#seek-bar");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");



// Button Function

const likeBtn = document.querySelector(".fa-heart");
const backwardBtn = document.querySelector(".fa-backward-step");
const forwardBtn = document.querySelector(".fa-forward-step");
const pauseBtn = document.querySelector(".fa-pause");
const playBtn = document.querySelector(".fa-circle-play");
const shuffleBtn = document.querySelector(".fa-shuffle");
let shuffleVal = false;




// seeting up music
const setMusic = (i) => {
  seekBar.value = 0
  let song = song[i]
  currentMusic = i

  music.src = song.audio

  title.innerHTML = song.song
  cover.innerHTML = song.cover
  singer.innerHTML = song.singer
}

setMusic(0)

// 