function blinker()
{
	for (i=0;i<100;i++) {
	    if(document.getElementsByClassName('blink')[i]) {
	        var d = document.getElementsByClassName('blink')[i] ;
	        d.style.color= (d.style.color=='black'?'white':'black');
	        setTimeout('blinker()', 500);
	    }
	};
}