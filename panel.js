//clase panel
class panel
{	
	//si al constructor le pasamos un 1 indicara que es el panel de juego
	//si le pasamos un 2 indicara que es el panel de ficha disponible
	constructor(num)
	{
		//si el tipo de panel es el del juego obviamente necesitaremos muchas mas funciones
		if(num==1)
		{
			this.height = 400;
			this.width = 400;

			this.tipo = num;

			this.titulo ='Panel de juego';

			this.puntuacion = 0;

			//esta es la matriz que se nos pide en la practica con la que se gestionara todo
			//inicializaremos la matriz de 10x10 con todas las posiciones a 0(libres)
			this.matriz = [];

			for(var x = 0;x<10;x++)
			{
				this.matriz[x] = new Array(10);
			}

			for(var i  = 0;i<10;i++)
			{
				for(var t = 0;t<10;t++)
				{
					this.matriz[i][t] = 0;
				}
			}
		}
		else if(num==2)
		{
			this.height = 100;
			this.width = 100;

			this.tipo = num;

			this.titulo = 'Pieza disponible';
		}
	}

	setPuntuacion(num)
	{
		puntuacion = puntuacion + num;
	}

	getPuntuacion()
	{
		return puntuacion;
	}

	pintar(div,pan)
	{	

		let cv = document.getElementById(pan);
		let ctx = cv.getContext('2d');
		let tam = this.width/div;

		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#a00';

		for(let i=1;i<div;i++)
		{
			//Verticales
			ctx.moveTo(i*tam,0);
			ctx.lineTo(i*tam,this.height);
			//Horizontales
			ctx.moveTo(0,i*tam);
			ctx.lineTo(this.width,i*tam);
		}

		ctx.stroke();
	}
}