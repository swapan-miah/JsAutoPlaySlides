var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var window = window;
	 
// Image List
images[0] = "https://media.istockphoto.com/id/1255328634/photo/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch.jpg?s=612x612&w=0&k=20&c=e2yHkZt3DISv6e1dpkZgABgC9fxfY93cB1H4MdY9sJs=";
images[1] = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/362100/362148.jpg";
images[2] = "https://img.cricketworld.com/images/f-126389/england's-jonny-bairstow-and-ben-stokes-walk-off-the-field-at-lunch.jpg";
images[3] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBqgGDhmP0Ga7C8IrErOQUv8_aDUJWMt5CZqkSvTvlbC3RVG0SdE4PoOXAYdVja6yijo&usqp=CAU";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

Run function when page loads
window.onload=changeImg;


// var image = [];
// var i = 0;
// var time = 3000;
// var slide = document.querySelector(".slide");



// image[0]= "https://media.istockphoto.com/id/1255328634/photo/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch.jpg?s=612x612&w=0&k=20&c=e2yHkZt3DISv6e1dpkZgABgC9fxfY93cB1H4MdY9sJs=";
// image[1]= "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/362100/362148.jpg";
// image[2]= "https://img.cricketworld.com/images/f-126389/england's-jonny-bairstow-and-ben-stokes-walk-off-the-field-at-lunch.jpg";
// image[3]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBqgGDhmP0Ga7C8IrErOQUv8_aDUJWMt5CZqkSvTvlbC3RVG0SdE4PoOXAYdVja6yijo&usqp=CAU";


// function changeImg(){
// 	console.log("Setimeout Function Call me")
// 	slide.src = image[i];
// 	console.log(image[i])
// 	if(i < image.length -1){
// 		i++;
// 	}else{
// 		i=0;
// 	}
// 	setTimeout("changeImg()", time);

// }

// window.onload=changeImg();