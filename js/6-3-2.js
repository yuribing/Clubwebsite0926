
$(window).on('load',function(){ 
  setTimeout(loading,2000);
});


function loading()
{
  $("#youtube-area").addClass('appear');
 
}

//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('youtube', {
        videoId: 'dWUj3ahUqoo',
        controls: 0,
        disablekb:1,
        playerVars: {
            playsinline: 1,
            autoplay:1,
            fs:0,
            rel: 1,
            controls: 0,
            modestbranding: 1, 
            iv_load_policy: 3, 
            start:6,
            
            loop:1,
        },    
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}



  function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  }
