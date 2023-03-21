let helloButton = document.getElementById("hello-button");
helloButton.addEventListener("click", changeMessage);

function changeMessage() {
  let messageElement = document.getElementById("message");
  messageElement.innerHTML = "Hello JavaScript!";

  messageElement.style.color = "#ff3333";
  messageElement.style.backgroundColor = "#000000"; // CSS property is: background-color
  messageElement.style.fontFamily = "Arial"; // CSS property name is: font-family
  messageElement.style.fontSize = "50px"; // CSS property is: font-size
  messageElement.style.padding = "10px";
  messageElement.style.border = "5px solid #ff3333";
  messageElement.style.borderRadius = "5px"; // CSS property is: border-radius
  messageElement.style.width = "400px";
  messageElement.style.textAlign = "center"; // CSS property is: text-align
  messageElement.style.margin = "0 auto";
  messageElement.style.marginTop = "200px"; // CSS property is: margin-top

  let bodyElement = document.getElementById("whole-page");
  bodyElement.style.backgroundColor = "#222222";

  let buttonElement = document.getElementById("hello-button");
  buttonElement.style.display = "none"; // gone!
}
