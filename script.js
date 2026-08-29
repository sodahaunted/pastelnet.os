function showTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
    });
  document.getElementById('clock').textContent = timeString;
  showTime();
  }

  setInterval(showTime, 1000);
  showTime();

dragElement(document.getElementById("welcome"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var startTop = 0, startLeft = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    startTop = elmnt.offsetTop;
    startLeft = elmnt.offsetLeft;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    elmnt.style.top = (startTop - pos2) + "px";
    elmnt.style.left = (startLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.querySelector("#userMenu"));
dragElement(document.querySelector("#messages"));