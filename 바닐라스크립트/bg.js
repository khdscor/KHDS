const body=document.querySelector("body");
const IMG_NUMBER = 6;


function paintImage(imgnumber){
	const image = new Image();
	image.src=`image${imgnumber}.PNG`;
	image.classList.add("bgImage");
	body.appendChild(image);
	
}
	
function getRandom(){
	const number=parseInt(Math.random()*1000)% IMG_NUMBER+1;
	return number;
}

function init(){
	const randomNumber=getRandom();
	paintImage(randomNumber);
}

init();