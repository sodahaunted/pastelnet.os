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
  function closeWindow(el) { el.style.display = "none"; }

  var welcomeMenu = document.querySelector("#welcome");

  document.querySelector("#welcomeclose").addEventListener("click", function() {
                closeWindow(welcomeMenu);
  })
  document.querySelector("#welcomeopen").addEventListener("click", function() {
  openWindow(welcomeMenu);
  });
            
  var userMenu = document.querySelector("#userMenu")

  document.querySelector("#usermenuclose").addEventListener("click", function() {
  closeWindow(userMenu);
  });
  document.querySelector("#usermenuopen").addEventListener("click", function() {
  openWindow(userMenu);
  });

  var messages = document.querySelector("#messages")

  document.querySelector("#messagesclose").addEventListener("click", function() {
  closeWindow(messages);
  });
  document.querySelector("#messagesopen").addEventListener("click", function() {
  openWindow(messages);
  });

  var music = document.querySelector("#music")
  var musicopen = document.querySelector("#musicopen")

  musicopen.addEventListener("click", function() {
  openWindow(music);
  });
  document.querySelector("#musicclose").addEventListener("click", function() {
                closeWindow(music);
            });

            var calculator = document.querySelector("#calculator")

            document.querySelector("#calcclose").addEventListener("click", function() {
                closeWindow(calculator);
            });
            document.querySelector("#calcopen").addEventListener("click", function() {
                openWindow(calculator);
            });
            
            var notes = document.querySelector("#notes")

            document.querySelector("#notesclose").addEventListener("click", function() {
                closeWindow(notes);
            });
            document.querySelector("#notesopen").addEventListener("click", function() {
                openWindow(notes);
            });

            var moon = document.querySelector("#moon")

            document.querySelector("#moonclose").addEventListener("click", function() {
                closeWindow(moon);
            });
            document.querySelector("#moonopen").addEventListener("click", function() {
                openWindow(moon);
            });

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
dragElement(document.querySelector("#calculator"));
dragElement(document.querySelector("#music"));
dragElement(document.querySelector("#notes"));
dragElement(document.querySelector("#moon"));

const display = document.getElementById("display");

function appendDisplay(input) {
  display.value += input;
}

function clearDisplay(input) {
  display.value = "";
}

  function playMusic() {
    var audio = new Audio('FrankJavCee - Ｓｉｍｐｓｏｎｗａｖｅ １９９５ (Original Music Video).mp3');
    audio.play();
  }

function calculate() {
  try {
    display.value = eval(display.value)
  }
  catch(error) {
    display.value = ""
  } 
}