//Main Functions
//event to validate if the input typo in the register page is correct
let homeLocalhost = "./Home.html"
let signInLocalhost = "./Sign in.html"
let mainClick = document.querySelector(".hide_any_popUp")

//Show the dropdown menu
let navbarDropDownMenu = document.querySelector(".dropdown");
function dropdownMenuShow() {
  if (navbarDropDownMenu.classList.contains('showDropdownMenu')) {
    navbarDropDownMenu.classList.remove('showDropdownMenu');
   }else{
      getUserNameFromStorage("user_name_dropdown")
      navbarDropDownMenu.classList.add('showDropdownMenu');
  }
}

//Hide the pop up if the mouse click is out the pop up
mainClick.addEventListener("click", () => {
  if (navbarDropDownMenu.classList.contains('showDropdownMenu')) {
    navbarDropDownMenu.classList.remove('showDropdownMenu');
 }
});

//Set to the dropdown menu the user name importing from local storage
function getUserNameFromStorage(userId) {
  let activeUserLogin = document.querySelector(`.${userId}`);
  let activeUserDatabase = JSON.parse(localStorage.getItem("activeUser"));
  switch (true) {
    case activeUserDatabase != null:
      activeUserLogin.innerHTML = activeUserDatabase.userDbName;
      break;
  }
}

//in case of the user try to access the page without the token validation, the page
//returns to login page
function exitWithoutToken() {
  if (
    localStorage.getItem("token") == null &&
    window.location.href == homeLocalhost
  ) {
    alert("To access this page, please, inform login and password");
    window.location.href = signInLocalhost;
  }
}


//Logout and return to login page//
function LogUserOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("activeUser");
  window.location.href = signInLocalhost;
}