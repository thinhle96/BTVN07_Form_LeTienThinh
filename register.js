
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
function CheckPassword(inputtxt) { 

if(inputtxt.value.match(passw)) { 
return true;
}
else { 
alert('Password must have at least 9 characters which contain one numeric digit, one uppercase and one lowercase letter')
return false;
}
}
var checkpass = function() {
  if(document.getElementById('password').value.match(passw)) {
        document.getElementById('password').classList.remove("invalid");
        document.getElementById('password').classList.add("valid");
  } else {
        document.getElementById('password').classList.remove("valid");
        document.getElementById('password').classList.add("invalid");
  }
}

var checkcpass = function() {
  if(document.getElementById('cpassword').value === document.getElementById('password').value) {
        document.getElementById('cpassword').classList.remove("invalid");
        document.getElementById('cpassword').classList.add("valid");
  } else {
        document.getElementById('cpassword').classList.remove("valid");
        document.getElementById('cpassword').classList.add("invalid");
  }
}

var user = ["thinhtienle","manh","huong","truong"];
var checkusr = function() {
  
  if(document.getElementById('usr').value.match(user[0])){
    document.getElementById('usr').classList.remove("valid");
    document.getElementById('usr').classList.add("invalid");
   document.getElementById("userexist").innerHTML = "Username is existing";

  }
  else{
    document.getElementById('usr').classList.remove("invalid");
    document.getElementById('usr').classList.add("valid");
    document.getElementById("userexist").innerHTML = "";
  }
}
 

