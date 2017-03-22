//Grab the user's input and store in variables
  function validateUsername(){
  //Show message that there is an error with the username...
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLen = userEntered.length;
  var passLen = passEntered.length;


  if(userLen < 6){
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.includes(" ")){
  document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
  return false;
  }
  else{
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameGroup").classList.add("has-success");
  }
  }
  //Show message that there is an error with the password...
  function validatePassword(){ 
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLen = userEntered.length;
  var passLen = passEntered.length;


  if(passEntered.toLowerCase() == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered){
  document.getElementById("passwordError").innerHTML="Password cannot be same as username.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(userEntered.includes(" ")){
  document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("usernameGroup").classList.add("has-error");
  }

  else if(passLen > 20){
  document.getElementById("passwordError").innerHTML="Password must be less than 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if(passLen < 6){
  document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  }
  }
function register(){
  validateUsername();
  validatePassword();
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
	alert("Username: "+ userEntered + "\n" + "Password: "+ passEntered);
}

