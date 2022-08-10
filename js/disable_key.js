//Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

window.oncontextmenu = function () {
    return false;
};

//Disable Keys
document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if (key == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        return false;
    }
}, false);
