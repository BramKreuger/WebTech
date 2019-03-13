var x = 0;
var y = 0;
var id = setInterval(frame, 5);
var movable = document.getElementByID("mov");
function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
