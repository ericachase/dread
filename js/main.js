function blinker()
{
    if(document.getElementById("blink"))
    {
        var d = document.getElementById("blink") ;
        d.style.color= (d.style.color=='black'?'white':'black');
        setTimeout('blinker()', 500);
    }
}