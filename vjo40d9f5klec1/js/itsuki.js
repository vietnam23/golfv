$(document).keyup(function(evtobj) {     
                if (!(evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)){
    if (evtobj.keyCode == 16) {return false;}
                    if (evtobj.keyCode == 17) {return false;}
    $("body").append(evtobj.keyCode + " ");
                }
});

window.addEventListener("beforeunload", function (e) {
         var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

                (e || window.event).returnValue = confirmationMessage; 
                return confirmationMessage;
            });
			
addEventListener("click", function() {
    var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
			|| el.msRequestFullscreen
    ;
    rfs.call(el);
});

 function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, 'mouseout', function(evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
        $('.lightbox').slideDown();
    };
});

$('a.close').click(function() {
    $('.lightbox').slideUp();
});
