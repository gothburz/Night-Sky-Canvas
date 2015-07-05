'use strict';

function initCanvas(){
	var canvas = document.getElementById('bg');
	var ctx = canvas.getContext('2d');

	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

    var cW = canvas.width;
    var cH = canvas.height;

    var	stars = [];

     function addStar(){
    	var x = Math.floor(Math.random() * cW) + - 200;
    	var y = Math.floor(Math.random() * cH) + 1;
    	var s = Math.floor(Math.random() * 12) + 1;
  

    	stars.push({'x':x, 'y':y, 's': s});
    }
	
	function starField(){
		addStar();
		for(var i = 0; i < stars.length; i++){
			ctx.fillStyle = 'rgba(255, 255, 255, 1)';
			ctx.fillRect(stars[i].x++, stars[i].y, stars[i].s*0.15, stars[i].s*0.15);
			ctx.fill();
			if(stars[i].x > cW){
				stars.splice(i, 1);
			}
		}
	}

	function animate(){
		ctx.save();
		ctx.clearRect(0, 0, cW, cH);
		starField();
		ctx.restore();
	}
	
	var animateInterval = setInterval(animate, 50);
	}

	window.addEventListener('load', function(event){
	});

initCanvas();