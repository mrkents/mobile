/*
  Todo el código JavaScript luego del DeviceReady !!
 */
function inicio(){
	//navigator.notification.alert("Estamos listos..");
	//document.getElementById('load').style.display='none';
	//document.getElementById('app').style.display='block';
	navigator.notification.alert("inicio");
	// Register the event listener
	document.addEventListener("menubutton", onMenuKeyDown, false);
	document.addEventListener("backbutton", onBackKeyDown, false);
	
}

// Handle the menu button
function onMenuKeyDown() {
	navigator.notification.alert("menu preparado");
	document.getElementById('menubutton').style.display='block';
}

// Handle the back button
function onBackKeyDown() {
	
	if($.mobile.activePage.is('#home')){
		if(document.getElementById('menubutton').style.display=='block'){
			//navigator.notification.alert("estaba abierto el menu");
			document.getElementById('menubutton').style.display='none';
			e.preventDefault();
		}
		else{
			navigator.app.exitApp();
		}
	}
	/*else if($.mobile.activePage.is('#centros')){
		navigator.notification.alert("desde centros hacia");
		//$.mobile.changePage('#menubutton');
		navigator.app.backHistory()
	}*/
	else {
		//navigator.notification.alert("general back...");
		navigator.app.backHistory()
	}
}


/*
function onDeviceReady() {
      document.addEventListener("backbutton", handleBackButton, true);
}
function handleBackButton(){
 
    if($.mobile.activePage.attr('id') == 'home'
              || $.mobile.activePage.attr('id') == 'listaUsuarios'){
        navigator.app.exitApp();
    }else if ($.mobile.activePage.attr('id') == 'cita'){
        $.mobile.changePage('#listaUsuarios');
    }else{
        navigator.app.backHistory();
    }
}
 
document.addEventListener("deviceready", onDeviceReady, false);
*/
