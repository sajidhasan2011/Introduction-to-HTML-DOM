function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  const pass = document.getElementById("password").value;

  const age = document.getElementById("age").value;

  const msgBox = document.getElementById("message");

  let message = "";

  if (email === "") {
    message = "Please Enter an Email";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "Password Must be Atleast 8 Charecter";
    msgBox.style.color = "red";
  } else if (age === "") {
    message = "age Must be Between 12-50";
    msgBox.style.color = "red";
  } else {
    message = "Login Successful";
    msgBox.style.color = "green";
  }

  msgBox.innerHTML = message;
}
