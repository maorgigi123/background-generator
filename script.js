var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function setRandomColor(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ generateRandomHexColor() 
	+ ", " 
	+ generateRandomHexColor()
	+ ")";

	css.textContent = body.style.background + ";";
}
function generateRandomHexColor() { // Generating random hex-value colors
	var x = Math.round(0xffffff * Math.random()).toString(16);
	var y = (6 - x.length);
	var z = "000000";
	var z1 = z.substring(0, y);
	var randomColor = '#' + z1 + x;
	return randomColor;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",setRandomColor);