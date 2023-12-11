let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

function onPlayerStateChange(event) {
    // Respond to player state changes (e.g., video ended)
}

function loadVideo() {
    const videoId = document.getElementById('videoId').value;
    player.loadVideoById(videoId);
}
