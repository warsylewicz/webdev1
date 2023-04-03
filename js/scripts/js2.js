// let name = prompt("What is your name?");
// alert("Hi " + name);
// console.log("This is not visible in the window.");
// document.getElementById("demo").innerHTML = "Hello World!";

let a = 5;
let b = "5";
alert(a == b); // true
alert(a === b); // false

alert(null == true); // false
alert(null == false); // false
alert(null == null); // true

alert(0.1); // 0.1
alert(0.2); // 0.2
alert(0.1 + 0.2); // not 0.3   !!!

alert("b" + "a" + +"a" + "a");
