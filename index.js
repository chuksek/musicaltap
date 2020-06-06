// JavaScript Document
window.addEventListener('load', () => {
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector("visual");
	const colors = [
		"#E5213F",
		"#E30AD4",
		"#3C19B1",
		"#17BFCD",
		"#1ED75B",
		"#D3CD2C"
	];
	
	//lets get going with the sunds here
	
	pads.forEach((pad, index) => {
		pad.addEventListener("click", function(){
			sounds[index].currentTime = 0;
			sounds[index].play();
			
		createBubbles(index);
		});
	});
	
	//create a function that makes bubbles
	
	const createBubbles = (index) => {
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.time.animation = "jump 1s ease";
		bubble.addEventListener('animationend', function(){
			visual.removeChild(this);
		})
	};
});
