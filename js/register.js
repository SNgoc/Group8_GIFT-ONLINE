function validate() {
	var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
    
    if (p2 == p1) {
        alert ("Sign up success!");
    }
    if (p2 != p1) {
        alert ("Password not match, please try again!");
        event.preventDefault();
    }
	  
}