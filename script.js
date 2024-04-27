// Typing effect script
const text = "Welcome to The Hacker Lounge";
let index = 0;

function type() {
  document.getElementById("typing-effect").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 150);
  } else {
    runTerminalCommand();
  }
}

type();

// Terminal animation
function runTerminalCommand() {
  const terminalOutput = document.getElementById("terminal-output");
  const ctrlAltText = "CTRL + ALT 1337";
  const aspects = ["Hacking", "InfoSec", "News"];

  typeCommand(ctrlAltText, "ctrl-alt-text", () => {
    typeAspects(aspects, "aspects-text");
  });

  function typeCommand(command, elementId, onComplete) {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < command.length) {
        document.getElementById(elementId).textContent += command.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
        onComplete();
      }
    }, 150); // Slower typing speed
  }

  function typeAspects(aspects, elementId) {
    let aspectIndex = 0;
    const aspectInterval = setInterval(() => {
      if (aspectIndex < aspects.length) {
        document.getElementById(elementId).innerHTML +=
          "<br>&nbsp;&nbsp;&bull; " + aspects[aspectIndex];
        aspectIndex++;
      } else {
        clearInterval(aspectInterval);
      }
    }, 800); // Slower typing speed
  }
}
