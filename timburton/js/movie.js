var video

function changeVideo(linkBtn){
	video=document.getElementById('videoBG');
	video.src=linkBtn.href;
	video.load();
	video.type='video/mp4';
	playVideo();
	return false;
}

function playVideo(){

	video.play();
}
