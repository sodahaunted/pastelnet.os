    function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 100);



    // Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var startTop = 0, startLeft = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // save the elements position at startup
    startTop = elmnt.offsetTop;
    startLeft = elmnt.offsetLeft;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate how far the mouse moved:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // new position is based on start pos and how far it moved
    elmnt.style.top = (startTop - pos2) + "px";
    elmnt.style.left = (startLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement(document.getElementById("welcome"));

dragElement(document.querySelector("#userMenu"));

if (document.getElementById(elmnt.id + "header")) {
	// if present, the header is where you move the DIV from:
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
	// otherwise, move the DIV from anywhere inside the DIV:
	elmnt.onmousedown = dragMouseDown;
}



function selectIcon(element) {
  element.classList.add("appIcon");
  selectedIcon = element
} 

function selectIcon(element) {
  element.classList.add("appIcon");
  selectedIcon = element
} 

function handleIconTap(element) {
  if (condition) {
    functionA(element)
  } else {
    functionB(element)
  }
}


var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}
