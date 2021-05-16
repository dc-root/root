function menuToggle() {

	let menuArea = document.getElementById("menu-area");


	if(menuArea.style.width == "0px") {

		menuArea.style.width = "300px";
	} else {
		menuArea.style.width = "0px";
	}

}
