

/*In this function, I want to change the background color for my website. 
    I also wanted to change the icon based on what mode they are on


    1. we get the value of <body> by using document.body then set it into a variable for easy access
    2. I learned to use .classList toggle on W3 where you can toggle between class and its default variable. 
    In the CSS file, I have a class name dark-mode so that it can toggle to dark mode
    3. In the second part of the function, I want it to change the icon based on the background color. 
    Since we're using .classList, they have a contain method to check if my body has the class dark-mode or not
    It served the purpose for what I need. I set an if-statement that if bgcolor contain dark-mode then set the icon to sun, if not set it to moon!*/

function changebgColor() {
  let bgcolor = document.body;
  bgcolor.classList.toggle("dark-mode");

  if (bgcolor.classList.contains("dark-mode")) {
    document.getElementById("tgbutton").src = "Icons/sun-xxl.png";
  } else if (!bgcolor.classList.contains("dark-mode")) {
    document.getElementById("tgbutton").src = "Icons/moon-xxl.png";
  }
}


/* Scroll to the top for user because I don't have a moving nav bar */
function scrollthepage () {
  document.documentElement.scrollTop = 0;
}
/*Validating user input for contact form*/


/* jQuery Table */  