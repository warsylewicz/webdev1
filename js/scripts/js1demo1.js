let helloButton = document.getElementById("hello-button");
helloButton.addEventListener("click", changeMessage);

function changeMessage() {
  let messageElement = document.getElementById("message");
  messageElement.innerHTML = "Hello JavaScript!";
}
