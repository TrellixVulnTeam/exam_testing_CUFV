// Selecting html
const main = document.querySelector("main");

export function displayMessage(type) {
 // Setting the innerHTML of the message
 const error = "Oh no. Something really bad went wrong here.... Try again later";
 const success = "Oh yes. everything went well!";
 const alert = "THIS IS AN ALERT FROM THE CREATOR";
 const warning = "THIS IS A WARNING";

 switch (type) {
  case "error":
   main.classList.add("error");
   main.innerHTML += `<p>${error}</p>`;
   break;

  case "success":
   main.style.display = "flex";
   main.classList.add("success");
   main.innerHTML += `<p>${success}</p>`;
   break;

  case "alert":
   main.style.display = "flex";
   main.classList.add("alert");
   main.innerHTML += `<p>${alert}</p>`;

  case "warning":
   main.style.display = "flex";
   main.classList.add("warning");
   main.innerHTML += `<p>${warning}</p>`;
   break;
 }
}
