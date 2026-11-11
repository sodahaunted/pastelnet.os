function updateTime() {
  const currentTime = new Date().toLocaleTimeString(undefined, {
  hour: '2-digit',
  minute: '2-digit'
});
  const timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", function() {
  function openWindow(el) { el.style.display = "block"; }
  function closeWindow(el) {
  console.trace("closing", el.id);
  el.style.display = "none";
}

  const applications = ["welcome", "userMenu", "messages", "music", "calc", "notes", "moon"];

  applications.forEach(function(application) {
    const win = document.querySelector("#" + (application));

    document.querySelector("#" + application + "open").addEventListener("click", function() {
      openWindow(win);
    });
    document.querySelector("#" + application + "close").addEventListener("click", function() {
      closeWindow(win);
    });
  });


// userMenu application scripts
  const textElement = document.getElementById('userMenuText');
  const buttonElement = document.getElementById('userMenuButton');
  const userName = document.getElementById("userMenuInput")

  userMenuInput.type = "text";
  buttonElement.addEventListener('click', () => {
    const userValue = userMenuInput.value;
    textElement.textContent = 'Welcome, ' + userValue + '. Thank you for joining us.';
  });

  let topZ = 1;
    document.querySelectorAll(".content").forEach(function(win) {
      win.addEventListener("mousedown", function() {
      topZ++;
      win.style.zIndex = topZ;
      });
    });
  });

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

const shortcuts = ["welcome", "userMenu", "messages", "calc", "music", "notes", "moon"]

shortcuts.forEach(function(shortcut) {
  dragElement(document.querySelector("#" + shortcut));
});

const display = document.getElementById("display");


// calculator app scripts
  function appendDisplay(input) {
    display.value += input;
  }

  function clearDisplay(input) {
    display.value = "";
  }

  function calculate() {
    try {
      display.value = eval(display.value)
    }
    catch(error) {
      display.value = ""
    } 
  }

// music app scripts
  function playMusic() {
    var audio = new Audio('FrankJavCee - Ｓｉｍｐｓｏｎｗａｖｅ １９９５ (Original Music Video).mp3');
    audio.play();
  }

//notes app scripts
  function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
  }

  function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
  }
  showNotes()