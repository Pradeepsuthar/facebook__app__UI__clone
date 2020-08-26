// Play Pause Button
function playPauseVideo(btn_text, video) {
    var video = document.getElementById(video);
    var btn_text = document.getElementById(btn_text);
    if (video.paused) {
        video.play();
        btn_text.innerHTML = "pause";
    } else {
        video.pause();
        btn_text.innerHTML = "play_arrow";
    }
}

// Reels video swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});