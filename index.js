

import { navbar } from "./components/navbar.js";

let navbar_div = document.getElementById('navbar')

navbar_div.innerHTML = navbar();

let search_btn = document.getElementById('search_button');
search_btn.onclick = () => {

    searchVideos();
}

//                   steps of code.
// 1. function defination for searchVideos()
// 2. make fetch call.

const searchVideos = async () => {

try {

    const API_KEY = 'AIzaSyD0QC4mDug3W2gxPvSr6vh-ehZAnDJUf04';

    let search_term = document.getElementById('search_term').value;
    
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${search_term}&key=${API_KEY}
    `);
    
    let data = await response.json();

    let actual_data = data.items;
    // console.log('actual_data', actual_data)
    
    appendVideos(actual_data);
}
catch (err) {
    console.log('err:', err)
}
};

const container = document.getElementById('container');

const appendVideos = (data) => {

container.innerHTML = null;

data.forEach(({ snippet, id: { videoId } }) => {

let div = document.createElement('div');

let p_title = document.createElement('p');
p_title.innerText = snippet.title;

let p_channel_name = document.createElement('p');
p_channel_name.innerText = snippet.channelTitle;

let thumbnail = document.createElement('img');
thumbnail.src = snippet.thumbnails.high.url;

div.append(thumbnail, p_title, p_channel_name);


// add event handler to this div.

div.onclick = () => {

let data = {
    snippet,
    videoId,
};

data = JSON.stringify(data);

localStorage.setItem('clicked_video', data);

window.location.href = '/video.html';

};

container.append(div);

});

};

                      // Day 2
// 1. make the thumbnail clickable.
// 2. How youTube identifies a video.






