const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLinkClick(event) {
    event.preventDefault();
    console.dir(event);
} 
   

link.addEventListener("click", onLinkClick);

