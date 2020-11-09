function login()
{
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(uname =='')
  {
    alert("please enter user name.");
  }
  else if(pwd=='')
  {
        alert("enter the password");
  }
  else if(!filter.test(uname))
  {
    alert("Enter valid email id.");
  }
  else if(pwd.length < 4 || pwd.length > 12)
  {
    alert("Wrong Password!!! Password min is 4 and max length is 12.");
  }
  else
  {
alert('Thank You for Login & You are Redirecting to GIFTS ONLINE HOME');
//Redirecting to other page or webste code or you can set your own html page.
     window.location = "https://sngoc.github.io/Group8_GIFT-ONLINE/";
    }
}		