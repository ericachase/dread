$(document).ready(function(){
	var toShow = true;
	$(document).keydown(function(keyEvent) {
	    if(keyEvent.keyCode == 13){
	            $('#1').toggle(!toShow);
	            $('#1').toggle(!toShow);
	        toShow = !toShow;
	    }
	});

		var ar = [
		"Welcome",
		"test",
		"test2"
	];

	$('#words').text(ar[0]);


});