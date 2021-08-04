let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let changeColor = document.getElementById("switch");
let text = document.getElementById("mode");
for (item of buttons) {
	item.addEventListener("click", (e) => {
		buttonText = e.target.innerText;
		if (buttonText == "X") {
			buttonText = "*";
			screen.value += buttonText;
		} else if (buttonText == "C") {
			screen.value = "";
		} else if (buttonText == "=") {
			screen.value = eval(screen.value);
		} else {
			screen.value += buttonText;
		}
	});
}
function colorChange() {
	document.body.classList.toggle("darkMode");
	// text.innerHTML = "WHITE MODE";
	// text.classList. = "white";
	// screen.classList.add("changescr");
}
changeColor.addEventListener("change", colorChange);
