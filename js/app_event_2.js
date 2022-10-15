const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLinkClick(event) {
    console.log(event);
    alert("Cliced");
} 
   

link.addEventListener("click", onLinkClick);

