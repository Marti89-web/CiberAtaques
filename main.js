alert("Gracias por usar Ciberataques by Martín Valdez");

function irArriba(){
	window.addEventlistenner("scroll", ()=>){
		var scroll=document.documentElement.scrollTop;
		console.log(scroll);
		var botonArriba =document.getElementById("botonArriba")
	}

		if (scroll >300px) {
			botonArriba.style.right =20px + "px";
		}
		else{
			botonArriba.style.right =-100px + "px";

		}
	}
	