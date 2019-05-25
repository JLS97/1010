
var DIVISIONES = 10;
var DIVISIONES2 = 5;

var canvas1Lleno = false;
var canvas2Lleno = false;
var canvas3Lleno = false;

//objeto de tipo pieza
class Pieza 
{
	constructor(num)
	{
		if(num == 0)
			this.tipo =1;
		else
			this.tipo = num;
	}

	tipo()
	{
		return this.tipo;
	}
}

var Pieza1 = new Pieza(Math.round(Math.random()*9));
var Pieza2 = new Pieza(Math.round(Math.random()*9));
var Pieza3 = new Pieza(Math.round(Math.random()*9));

console.log(Pieza1.tipo);
console.log(Pieza2.tipo);
console.log(Pieza3.tipo);

function pintarPanelJuego()
{
	let cv = document.getElementById('panel');
	let ctx = cv.getContext('2d');
	let tam = cv.width/DIVISIONES;

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#a00';

	for(let i=1;i<DIVISIONES;i++)
	{
		//Verticales
		ctx.moveTo(i*tam,0);
		ctx.lineTo(i*tam,cv.height);
		//Horizontales
		ctx.moveTo(0,i*tam);
		ctx.lineTo(cv.width,i*tam);
	}

	ctx.stroke();

	pintarPanelesFichas();
}

function pintarPanelesFichas()
{
	let f1 = document.getElementById('pieza1');
	let f2 = document.getElementById('pieza2');
	let f3 = document.getElementById('pieza3');

	let ctxf1 = f1.getContext('2d');
	let ctxf2 = f2.getContext('2d');
	let ctxf3 = f3.getContext('2d');

	let tam2 = f1.width/DIVISIONES2;

	//Primera ficha
	ctxf1.beginPath();
	ctxf1.lineWidth = 2;
	ctxf1.strokeStyle = '#a00';

	//Segunda ficha
	ctxf2.beginPath();
	ctxf2.lineWidth = 2;
	ctxf2.strokeStyle = '#a00';

	//Tercera ficha
	ctxf3.beginPath();
	ctxf3.lineWidth = 2;
	ctxf3.strokeStyle = '#a00';

	for(let i=1;i<DIVISIONES2;i++)
	{
		//Verticales
		ctxf1.moveTo(i*tam2,0);
		ctxf1.lineTo(i*tam2,f1.height);
		//Horizontales
		ctxf1.moveTo(0,i*tam2);
		ctxf1.lineTo(f1.width,i*tam2);
	}

	for(let i=1;i<DIVISIONES2;i++)
	{
		//Verticales
		ctxf2.moveTo(i*tam2,0);
		ctxf2.lineTo(i*tam2,f2.height);
		//Horizontales
		ctxf2.moveTo(0,i*tam2);
		ctxf2.lineTo(f2.width,i*tam2);
	}

	for(let i=1;i<DIVISIONES2;i++)
	{
		//Verticales
		ctxf3.moveTo(i*tam2,0);
		ctxf3.lineTo(i*tam2,f3.height);
		//Horizontales
		ctxf3.moveTo(0,i*tam2);
		ctxf3.lineTo(f3.width,i*tam2);
	}

	ctxf1.stroke();
	ctxf2.stroke();
	ctxf3.stroke();


}
