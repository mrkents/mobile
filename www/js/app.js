/*
  Todo el código JavaScript luego del DeviceReady !!
 */
function inicio(){

	// Register the event listener
	document.addEventListener("menubutton", onMenuKeyDown, false);
	document.addEventListener("backbutton", onBackKeyDown, false);
	
}

// Handle the menu button
function onMenuKeyDown() {
	document.getElementById('menubutton').style.display='block';
}

// Handle the back button
function onBackKeyDown() {
	if(document.getElementById('menubutton').style.display=='block'){
		document.getElementById('menubutton').style.display='none';
		e.preventDefault();
	}
	else if(document.getElementById('home')){
		navigator.app.exitApp();
	}
	else{
		navigator.app.backHistory()
	}
	
}