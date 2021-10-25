$(document).ready(function(){

//slider
	if(window.location.href.indexOf('index') > -1){ //cargar solamente cuando nos encontremos en la página index
    	$('.slider').bxSlider({
	    	mode: 'fade',
	  		auto: true,
			autoControls: true,
			stopAutoOnClick: true,
			pager: true,
			responsive: true,
		});
	


//posts

		var posts = [
			{
				titulo: 'Título de prueba 1',
				fecha: moment().format("D") + ' · ' + moment().format("MMM") + ' · ' + moment().format("YYYY"),
				articulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tristique erat. Aliquam eros ex, rhoncus sed posuere id, tincidunt in nunc. Morbi tempor, est ut pharetra vestibulum, tellus odio sodales nisi, quis sodales dui ex eget sem. Cras iaculis hendrerit dui nec tristique. Fusce tincidunt auctor lobortis. Suspendisse convallis vulputate nunc, a maximus sapien tristique quis. Phasellus quis magna ut lorem lobortis ultrices. Fusce vitae egestas neque, a gravida quam. Proin faucibus congue lorem, id vulputate nunc elementum in. Curabitur vitae aliquet nisl, eget elementum risus.'

		},

			{
				titulo: 'Título de prueba 2',
				fecha: moment().format("D") + ' · ' + moment().format("MMM") + ' · ' + moment().format("YYYY"),
				articulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tristique erat. Aliquam eros ex, rhoncus sed posuere id, tincidunt in nunc. Morbi tempor, est ut pharetra vestibulum, tellus odio sodales nisi, quis sodales dui ex eget sem. Cras iaculis hendrerit dui nec tristique. Fusce tincidunt auctor lobortis. Suspendisse convallis vulputate nunc, a maximus sapien tristique quis. Phasellus quis magna ut lorem lobortis ultrices. Fusce vitae egestas neque, a gravida quam. Proin faucibus congue lorem, id vulputate nunc elementum in. Curabitur vitae aliquet nisl, eget elementum risus.'

		},
			{
				titulo: 'Título de prueba 3',
				fecha: moment().format("D") + ' · ' + moment().format("MMM") + ' · ' + moment().format("YYYY"),
				articulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tristique erat. Aliquam eros ex, rhoncus sed posuere id, tincidunt in nunc. Morbi tempor, est ut pharetra vestibulum, tellus odio sodales nisi, quis sodales dui ex eget sem. Cras iaculis hendrerit dui nec tristique. Fusce tincidunt auctor lobortis. Suspendisse convallis vulputate nunc, a maximus sapien tristique quis. Phasellus quis magna ut lorem lobortis ultrices. Fusce vitae egestas neque, a gravida quam. Proin faucibus congue lorem, id vulputate nunc elementum in. Curabitur vitae aliquet nisl, eget elementum risus.'

		},
			{
				titulo: 'Título de prueba 4',
				fecha: moment().format("D") + ' · ' + moment().format("MMM") + ' · ' + moment().format("YYYY"),
				articulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tristique erat. Aliquam eros ex, rhoncus sed posuere id, tincidunt in nunc. Morbi tempor, est ut pharetra vestibulum, tellus odio sodales nisi, quis sodales dui ex eget sem. Cras iaculis hendrerit dui nec tristique. Fusce tincidunt auctor lobortis. Suspendisse convallis vulputate nunc, a maximus sapien tristique quis. Phasellus quis magna ut lorem lobortis ultrices. Fusce vitae egestas neque, a gravida quam. Proin faucibus congue lorem, id vulputate nunc elementum in. Curabitur vitae aliquet nisl, eget elementum risus.'

		},
		];

		posts.forEach((item,index) =>{
			//console.log(item.titulo);
			var entrada =`
			<article class="post" data-aos="fade-down" data-aos-delay=»20″ data-aos-easing="linear"
     data-aos-duration="500">
						<h2>${item.titulo}</h2>
						<span class="fecha">${item.fecha}</span>
						<p>${item.articulo}</p>
						
						<button class="btn">Leer más</button>
					</article>
					`;
			$(".blog-content").append(entrada);
		});
	}


	//Cambiador de tema modo nocturno
	var theme = $("#theme");
	var instagram = $("#instagram");
	var twitter = $("#twitter");
	$("#change-theme-dark").click(function(){
		theme.attr('href', './css/black.css');
		instagram.attr('src', './img/instagram_red.png');
		twitter.attr('src', './img/twitter_red.png');
	});
	$("#change-theme-light").click(function(){
		theme.attr('href', './css/style.css');
		instagram.attr('src', './img/instagram_light.png');
		twitter.attr('src', './img/twitter_light.png');
	});


	//Flecha para subir hacia arriba
	$('#flecha').click(function(){
		
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});


	//Acordeon jQuery UI
	if(window.location.href.indexOf('faq') > -1){
		$('#acordeon').accordion();
	}


	//Reloj
	setInterval(function(){
		var reloj = moment().format("hh:mm:ss");
		$('.reloj').html(reloj);
	},1000);


	
	

});

