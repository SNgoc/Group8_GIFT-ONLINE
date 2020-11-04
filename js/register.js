function validate() {
	var u = document.getElementById("username").value;
	var p1 = document.getElementById("password").value;
	var p2 = document.getElementById("password-repeat").value;
	  
	if(u== "") {
	alert("Enter your username!");
	return false;
	}
	if(p1 == "") {
	alert("Enter your password!");
	return false;
	}
	if(p2 == "") {
	alert("Confirm your password!");
	return false;
	}
	  
	alert("Congratulations! You have successfully registered");
	  
	return true;
	}
	