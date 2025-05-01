function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function readInput() {
  var username = document.getElementById("user").value;

  var password = document.getElementById("pass").value;
  event.preventDefault();
  if ((username=="PANDU"||username=="pandu"||username=="Pandu" )&& password=="nitroa310**"){
    window.location.href=" main.html";
  }
  else{
    alert("Invalid crediantials");
    window.location.href="index.html";
  }
  // You can now use the userInput variable as needed
}
function returnToLogin() {
  window.location.href = "index.html";
}





