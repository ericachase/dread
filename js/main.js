function blinker() {
	for (i=0;i<100;i++) {
	    if(document.getElementsByClassName('blink')[i]) {
	        var d = document.getElementsByClassName('blink')[i] ;
	        d.style.color= (d.style.color=='black'?'white':'black');
	        setTimeout('blinker()', 500);
	    }
	};
}

var toShow = true;
$(document).keydown(function(keyEvent) {
    if(keyEvent.keyCode == 13){
            $('#1').toggle(!toShow);
            $('#div2').toggle(!toShow);
        toShow = !toShow;
    }
});