
/* typing */

function typing(){
    if(i < textTyping.length){
        document.getElementById("typing").innerHTML += textTyping.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

var i = 0;
var textTyping;
var speed = 50;
textTyping = "Hello. I'm Min jeong.";

window.addEventListener('load',typing,false);
