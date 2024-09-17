console.log("welcome to spotify");
// initializing variables
let songIndex = 0;
let audioElement = new Audio('songs/Sokatore.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let NameofSong = document.getElementById('NameofSong');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sokatore oi", filePath: "songs/Sokatore.mp3", coverPath: "covers/sokatore.jpg"},
    {songName: "Tumi Robe Nirobe", filePath: "songs/Tumi Robe Nirobe.mp3", coverPath: "covers/Tumi robe nirobe.jpg"},
    {songName: "Bhalobeshe Sokhi", filePath: "songs/Bhalobeshe Sokhi.mp3", coverPath: "covers/bhalobeshe sokhi.jpg"},
    {songName: "O je mane na mana", filePath: "songs/o je mane na mana.mp3", coverPath: "covers/o je maane.jpg"},
    {songName: "Tumi Robe By Sanam", filePath: "songs/Tumi Robe Sanam Band.mp3", coverPath: "covers/Tumi robe nirobe.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('makeAllPLays')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('makeAllPLays')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        NameofSong.innerText = songs[songIndex].songName;
        audioElement.play();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    NameofSong.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    NameofSong.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});
