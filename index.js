
var DIVISIONES = 10;
var DIVISIONES2 = 5;

var resetFichas = true;


//main desde el que controlamos lo que ocurre en cada momento
window.onload =
function main(){

	//panel de juego
	var Panel = new panel(1);

	//paneles auxiliares para las fichas
	var PanelFicha1 = new panel(2);
	var PanelFicha2 = new panel(2);
	var PanelFicha3 = new panel(2);


	//pintamos los paneles

	Panel.pintar(10,'panel');

	PanelFicha1.pintar(5,'pieza1');
	PanelFicha2.pintar(5,'pieza2');
	PanelFicha3.pintar(5,'pieza3');

	//creamos las 3 primeras piezas
	var Pieza1 = new Pieza(Math.round(Math.random()*9));
	var Pieza2 = new Pieza(Math.round(Math.random()*9));
	var Pieza3 = new Pieza(Math.round(Math.random()*9));

	console.log(Pieza1.tipo);
	console.log(Pieza2.tipo);
	console.log(Pieza3.tipo);

	Pieza1.pinta('pieza1');
	Pieza2.pinta('pieza2');
	Pieza3.pinta('pieza3');


}