/* {a} is a boolean representing the image they picked;
 * a: True
 * b: False
 */
function vote(a) {
    $.post("/~vote", {
        
    }, function (data, textStatus, jqXHR) {
        
    });
}

$(function () {
    $(document).keydown(function(e) {
        switch(e.which) { 
            case 37: // left
                vote(true);
            break;

            case 38: // up
            break;

            case 39: // right
                vote(false);
            break;

            case 40: // down
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});