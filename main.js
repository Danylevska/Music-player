const audioElement = document.querySelector("audio");

const playButton = document.querySelector("#play");

const stopButton = document.querySelector("#stop");

const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

const track = document.querySelector("#track");

const image = document.querySelector("img")

const audioTracks = ["Mick Jagger - Strange Game (OST Хромые Лошади).mp3", "Tropkillaz & J Balvin & Anitta feat. MC Zaac - Bola Rebola.mp3", "Ben E. King - Stand By Me.mp3"];

const imgArray = ["2.jpeg", "1.jpg", "3.jpeg"]

audioElement.src = audioTracks[0];
track.textContent = audioTracks[0].slice(0, -4)

let currentTrackElement = 0;




stopButton.onclick = () => {
    audioElement.pause();
}


playButton.onclick = (e) => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
    e.target.textContent = audioElement.paused ? "Play" : "Pause";
};

previousButton.onclick = () => {
    currentTrackElement--;

    if (audioTracks[currentTrackElement]) {
        audioElement.src = audioTracks[currentTrackElement]
        track.textContent = audioTracks[currentTrackElement].slice(0, -4)
        image.src = imgArray[currentTrackElement]
      
    } else {

        audioElement.src = audioTracks.at(-1);
        image.src = imgArray.at(-1);
        

        currentTrackElement = audioTracks.length - 1;
        track.textContent = audioTracks[currentTrackElement].slice(0, -4)

       

    }

    audioElement.play();

};




nextButton.onclick = () => {

    currentTrackElement++;




    if (audioTracks[currentTrackElement]) {

        audioElement.src = audioTracks[currentTrackElement];
        track.textContent = audioTracks[currentTrackElement].slice(0, -4)
        image.src = imgArray[currentTrackElement]

    } else {

        audioElement.src = audioTracks[0];
        image.src = imgArray[0];
        track.textContent = audioTracks[0].slice(0, -4)

        currentTrackElement = 0;

    }

    audioElement.play();

};




