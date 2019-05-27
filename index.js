
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
		var Pieza1 = new Pieza(Math.round(Math.random()*9));
		var Pieza2 = new Pieza(Math.round(Math.random()*9));
		var Pieza3 = new Pieza(Math.round(Math.random()*9));

//******************************************************************		

//main desde el que controlamos lo que ocurre en cada momento
//cuando cargamos la ventana entramos en el main
window.onload =
function main(){


	//pintamos las cuadriculas
	//esto va fuera del bucleJuego porque la cuadricula será siempre la misma
	pintaCuadriculas(Panel,PanelFicha1,PanelFicha2,PanelFicha3);

	//bucle para el control de eventos en el juego
	bucleJuego();

	let cv = document.getElementById('panel');

	cv.addEventListener('click', function() { Panel.pintar(30,'panel') }, false);


}

function pintaCuadriculas()
{
	//pintamos los paneles

	Panel.pintar(10,'panel');

	PanelFicha1.pintar(5,'pieza1');
	PanelFicha2.pintar(5,'pieza2');
	PanelFicha3.pintar(5,'pieza3');
}

function pintaPiezas()
{

	console.log(Pieza1.tipo);
	console.log(Pieza2.tipo);
	console.log(Pieza3.tipo);

	Pieza1.pinta('pieza1');
	Pieza2.pinta('pieza2');
	Pieza3.pinta('pieza3');
}

function bucleJuego()
{	
	//Bucle del juego
	while(true)
	{
		pintarPiezas();
	}
}