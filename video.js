// 1. what is the goal here.
// 2. plays the video.

const showClickedVideo = () => {

let data = localStorage.getItem('clicked_video');

let { videoId } = JSON.parse(data);

/* Embedding a video using iframe html element.
Embedding a video is where you add the video directly to
your website, versus sending visitors to a different page
to view it.*/


let iframe = document.createElement('iframe');

iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

iframe.width = '100%'
iframe.height = '100%'

iframe.setAttribute('allowfullscreen', true);

let video_div = document.getElementById('video_details');
video_div.append(iframe);

};

