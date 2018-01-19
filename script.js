window.onload =  function(){


	var buttons = document.getElementById('buttons');
	var clear = document.getElementById('clear');
	var answer = document.getElementById('answer');

	buttons.addEventListener('click', function(e){

		if(e.target.nodeName === 'LI'){
			console.log('button clicked');

			var v = e.target.innerHTML;
			if(v === '=' ){
				try {
					answer.innerHTML = eval(answer.innerHTML)
				}
				catch(e){
					alert('invalid Expression');
				}
			}else{
				answer.innerHTML+=v;
			}
			
		}
	})

	clear.addEventListener('click', function(){
	answer.innerHTML = '';
})
}

