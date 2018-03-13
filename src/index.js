function fn(){
	document.querySelector("body").innerHTML ='<H1>1</H1>';
	console.log(new Date());

	try{
		$.getJSON('https://somedomain.com/login').done(function(res){
			var el = $('<span>' + JSON.stringify(res) + '</span>');
			$("body").append(el);
		});
	}catch(e){
		console.log(e)
	}

	try{
		$.getJSON('/hello').done(function(res){
			var el = $('<span>' + JSON.stringify(res) + '</span>');
			$("body").append(el);
		});
	}catch(e){
		
	}
}

fn();

if (module.hot) {
  module.hot.accept();
}