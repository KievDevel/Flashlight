/**
 * Created by Svetlychny on 28.03.2015.
 */

$(document).ready(function() {

    var flashlight = $('.flashlight');

    // делает фонарик более темным
    flashlight.css('opacity', 1);

    flashlight.height($(this).height()+200);
    flashlight.width($( window ).width()+200);

    var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
        mouseX = e.clientX-200;
        mouseY = e.clientY-200;
        flashlight.stop().animate({backgroundPosition: mouseX+'px ' + mouseY+'px'}, 0);
    });
});




