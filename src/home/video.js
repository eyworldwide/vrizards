function add(scene){
	let geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
	geometry.scale( - 1, 1, 1 );

	let video = document.createElement( 'video' );
	video.width = 640;
	video.height = 360;
	video.loop = true;
	video.muted = true;
	video.src = "src/home/videos/ClashofClans.mp4";
	// https://stackoverflow.com/questions/5054560/can-i-avoid-the-native-fullscreen-video-player-with-html5-on-iphone-or-android
	video.setAttribute( 'webkit-playsinline', 'true' );
	video.setAttribute( 'playsinline', 'true' );

	video.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

	// hide the controls if they're visible
	if (video.hasAttribute("controls")) {
		video.removeAttribute("controls")   
	}

	video.play();

	let texture = new THREE.VideoTexture( video );
	texture.minFilter = THREE.LinearFilter;
	texture.format = THREE.RGBFormat;

	let material = new THREE.MeshBasicMaterial( { map : texture } );

	let mesh = new THREE.Mesh( geometry, material );

	scene.add( mesh );
}



export default {add}