
var DIVISIONES = 10;
var DIVISIONES2 = 5;

var resetFichas = true;

//****************************************************************
//Variables Globales, en este caso los 3 paneles auxiliares
//y las 3 piezas que se podran resetear

	//Creamos los objetos que utilizaremos de forma global
	//Los Paneles
		//Panele de juego
		var Panel = new panel(1);

		//paneles auxiliares para las fichas
		var PanelFicha1 = new panel(2);
		var PanelFicha2 = new panel(2);
		var PanelFicha3 = new panel(2);

	//Las 3 piezas principales
		var Pieza1 = new Pieza(Math.round(Math.random()*9),'pieza1',PanelFicha1);
		var Pieza2 = new Pieza(Math.round(Math.random()*9),'pieza2',PanelFicha2);
		var Pieza3 = new Pieza(Math.round(Math.random()*9),'pieza3',PanelFicha3);

//******************************************************************		

//main desde el que controlamos lo que ocurre en cada momento
//cuando cargamos la ventana entramos en el main
window.onload =
	function main(){


		//pintamos las cuadriculas
		//esto va fuera del bucleJuego porque la cuadricula será siempre la misma
		pintaCuadriculas();

		//pintamos las piezas

		//bucle para el control de eventos en el juego
		Jugar();

		pintarPiezas();

		/*let cv = document.getElementById('panel');

		cv.addEventListener('click', function() { Panel.pintar(30,'panel') }, false);*/
	}

function pintaCuadriculas()
{
	//pintamos los paneles

	Panel.pintar(10,'panel');

	PanelFicha1.pintar(5,'pieza1');
	PanelFicha2.pintar(5,'pieza2');
	PanelFicha3.pintar(5,'pieza3');
}

function Jugar()
{	

	//se activa cuando pulsemos la pieza 1
		let cv = document.getElementById('pieza1');
		cv.addEventListener('click', function() { 

			/*var t = Pieza1.tipo;

			//variable que nos indica si debemos crear una nueva pieza
			var nueva = true;

			cv.addEventListener('click',function(){
				Pieza1.reset(t);
				pintarPiezas();
				nueva = false;
			},false);*/
			
			//Pieza auxiliar sabemos que esta pieza auxiliar sera la que añadamos al Panel de juego
			var PiezaAux = new Pieza(Pieza1.tipo,'panel',Panel);

			//if(nueva){
				//guardamos la pieza en la pieza auxiliar que meteremos en el panel de juego
				Pieza1.reset(Math.round(Math.random()*9));
			//}	

			if(Pieza1.getVacia() && Pieza2.getVacia() && Pieza3.getVacia())
			{	
				pintarPiezas();
			}

		}, false);

	//se activa cuando pulsemos la pieza 2
		let cv1 = document.getElementById('pieza2');
		cv1.addEventListener('click', function() { 

			//Pieza auxiliar sabemos que esta pieza auxiliar sera la que añadamos al Panel de juego
			var PiezaAux = new Pieza(Pieza2.tipo,'panel',Panel);

			Pieza2.reset(Math.round(Math.random()*9));

			if(Pieza1.getVacia() && Pieza2.getVacia() && Pieza3.getVacia())
			{
				pintarPiezas();
			}

		}, false);

	//se activa cuando pulsemos la pieza 3
		let cv2 = document.getElementById('pieza3');
		cv2.addEventListener('click', function() { 
			
			//Pieza auxiliar sabemos que esta pieza auxiliar sera la que añadamos al Panel de juego
			var PiezaAux = new Pieza(Pieza3.tipo,'panel',Panel);

			Pieza3.reset(Math.round(Math.random()*9));
			
			if(Pieza1.getVacia() && Pieza2.getVacia() && Pieza3.getVacia())
			{
				pintarPiezas();
			}

		}, false);
}

function pintarPiezas()
{

	console.log(Pieza1.tipo);
	console.log(Pieza2.tipo);
	console.log(Pieza3.tipo);

	Pieza1.pinta();
	Pieza2.pinta();
	Pieza3.pinta();
}