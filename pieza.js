//objeto de tipo pieza
class Pieza 
{
	constructor(num)
	{
		if(num == 0)
			this.tipo =1;
		else
			this.tipo = num;

		this.colorPieza = '#a00';
		this.isSelected = false;

		this.color = 'red';
	}

	tipo()
	{
		return this.tipo;
	}
	getSelected()
	{
		return this.isSelected;
	}
	//le paso como parametro el id del canvas en el que estoy, para que lo pinte ahi
	pinta(pieza)
	{
		let cv = document.getElementById(pieza);
		let ctx = cv.getContext('2d');

		//definimos los distintos tipos de pieza a pintar
		if(this.tipo == 1)
		{
			
			ctx.strokeStyle = '#a00';
			ctx.fillRect(20,20,20,20);
			ctx.fillRect(20,40,20,20);
			ctx.fillRect(20,60,20,20);
			ctx.fillRect(40,60,20,20);
			ctx.fillRect(60,60,20,20);

		}
		if(this.tipo == 2)
		{
			ctx.fillRect(40,60,20,-40);
		}
		if(this.tipo == 3)
		{
			ctx.fillRect(40,40,20,20);
		}
		if(this.tipo == 4)
		{
			ctx.fillRect(0,40,20,20);
			ctx.fillRect(20,40,20,20);
			ctx.fillRect(60,40,20,20);
			ctx.fillRect(40,40,20,20);
			ctx.fillRect(80,40,20,20);
		}
		if(this.tipo == 5)
		{
			ctx.fillRect(20,40,20,20);
			ctx.fillRect(60,40,20,20);
			ctx.fillRect(40,40,20,20);
		}
		if(this.tipo == 6)
		{
			ctx.fillRect(20,40,20,20);
			ctx.fillRect(40,40,20,20);
			ctx.fillRect(40,20,20,20);
			ctx.fillRect(20,20,20,20);
		}
		if(this.tipo == 7)
		{
			ctx.fillRect(40,20,20,20);
			ctx.fillRect(40,40,20,20);
			ctx.fillRect(40,60,20,20);
			ctx.fillRect(40,80,20,20);
		}
		if(this.tipo == 8)
		{
			ctx.fillRect(20,20,20,20);
			ctx.fillRect(20,40,20,20);
			ctx.fillRect(20,60,20,20);
			ctx.fillRect(40,20,20,20);
			ctx.fillRect(40,40,20,20);
			ctx.fillRect(40,60,20,20);
			ctx.fillRect(60,20,20,20);
			ctx.fillRect(60,40,20,20);
			ctx.fillRect(60,60,20,20);
		}
		if(this.tipo == 9)
		{
			ctx.fillRect(20,20,20,20);
			ctx.fillRect(40,20,20,20);
			ctx.fillRect(20,40,20,20);
		}

		//ctx.fillRect(20,0,20,20);

		ctx.stroke();
	}
}