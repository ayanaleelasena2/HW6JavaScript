var video;


window.addEventListener("load", function() {
   console.log("Good job opening the window")


});


//Page load
var video;


window.addEventListener("load", function() {
   console.log("Good job opening the window");
   video = document.querySelector('video');
   video.autoplay = false;
   video.loop = false;
});


//Play Button
document.querySelector("#play").addEventListener("click", function() {
   console.log("Play Video");
   video.play();
   updateVolumeInfo();
});


//Pause Button
document.querySelector("#pause").addEventListener("click", function() {
   console.log("Pause Video");
   video.pause();
});


//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
   video.playbackRate *= 0.9;
   console.log("New speed is " + video.playbackRate);
});


//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
   video.playbackRate /= 0.9;
   console.log("New speed is " + video.playbackRate);
});


//Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
   if (video.currentTime + 10 > video.duration) {
       video.currentTime = 0;
   } else {
       video.currentTime += 10;
   }
   console.log("Current location is " + video.currentTime);
});


//Mute
document.querySelector("#mute").addEventListener("click", function() {
   if (video.muted) {
       video.muted = false;
       this.textContent = "Mute";
       console.log("Unmute")
   } else {
       video.muted = true;
       this.textContent = "Unmute";
       console.log("Mute")
   }
});


//Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
   video.volume = this.value / 100;
   updateVolumeInfo();
   console.log("Volume is " + video.volume);
});


function updateVolumeInfo() {
   var volumeDisplay = document.querySelector('#volume');
   volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}


//Styled
document.querySelector("#vintage").addEventListener("click", function() {
   if (!video.classList.contains('oldSchool')) {
       video.classList.add('oldSchool');
   }
});


//Original
document.querySelector("#orig").addEventListener("click", function() {
   if (video.classList.contains('oldSchool')) {
       video.classList.remove('oldSchool');
   }
});


