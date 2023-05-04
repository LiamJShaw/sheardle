import './styles/styles.css'

const playButton = document.querySelector(".play-button");
const seekBar = document.querySelector(".seek-bar");
const progressBar = document.querySelector(".progress");

const audio = new Audio("https://p.scdn.co/mp3-preview/328e1de49e17b4e1ace2e8f6cdd10b0776a16bc7?cid=74ac949ca587402484dcef1408b4d7f3");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});
