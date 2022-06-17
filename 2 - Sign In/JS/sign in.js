// *********Sign in functions ********
//User name and password validation to access the Core CMP//
//Set the variables as global with all users login and password
let userName = document.getElementById("login_login_");
let password = document.getElementById("password_login_");
let msg_signin = document.getElementById("msg_signin");
let msg_text = document.querySelector(".msg_text");
let dot = document.querySelector(".showdot");
let userinformation = [];
let coreLoginAndPassword = {
  userDbName: "",
  userDbLogin: "",
  userDbPassword: "",
};
let dark_green = "#0c738a";
let dark_grey ="#363636";
let light_green ="#b0d1d8";
let light_white ="rgb(245,248,250)";
let light_black ="rgba(0, 0, 0, 0.1)";
let light_grey ="#adacad";
let grey ="grey";
let white ="white";
let red ="red";
document.addEventListener("keypress", (btnSubmitLogin) => {
  if (btnSubmitLogin.key === "Enter") {
    signIn();
  }
});
function signIn() {
  let userinformation = JSON.parse(localStorage.getItem("userList"));
  switch (true) {
    case userName.value === "" && password.value === "":
      Error_Css_show("Incorrect Username and Password");
      break;
    case userName.value === "" && password.value != "":
      Error_Css_show("Incorrect Username");
      break;
    case userName.value != "" && password.value === "":
      Error_Css_show("Incorrect Password");
      break;
    default:
      validateUsernameAndPassword(userinformation);
      break;
  }
}

//Sub functions
//Event to show the password when the eye button is clicked
let eyebtn = document.querySelector("#eye_Button");
let password_input = document.querySelector("#password_login_");
switch (true) {
  case eyebtn != null:
    eyebtn.addEventListener("click", () => {
      switch (password_input.getAttribute("type")) {
        case "password":
          password_input.setAttribute("type", "text");
          password_input.focus();
          break;
        case "text":
          password_input.setAttribute("type", "password");
          password_input.focus();
          break;
      }
    });
}
//Validate the username and password in the local storage
function validateUsernameAndPassword(userinformation) {
  if (userinformation != null) {
    userinformation.forEach((item) => {
      switch (true) {
        case userName.value == item.login_database &&
          password.value == item.password_database:
          coreLoginAndPassword = {
            userDbLogin: item.login_database,
            userDbName: item.name_database,
            userDbPassword: item.password_database,
          };
          break;
      }
    });
    if (
      coreLoginAndPassword.userDbLogin == userName.value &&
      coreLoginAndPassword.userDbPassword == password.value
    ) {
      let creatingmsg = 'Loading'
      Success_Css_show(creatingmsg);
      setTimeout(() => {
        window.location.href = homeLocalhost;
      }, 2000);
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      localStorage.setItem("token", token);
      localStorage.setItem("activeUser", JSON.stringify(coreLoginAndPassword));
    } else {
      Error_Css_show("Incorrect Username or Password");
      userName.focus();
    }
  } else {
    Error_Css_show("User not registered!");
  }
}
//Functions to format the error or success alert
function Error_Css_show(mensage) {
  if (mensage != null) {
    msg_text.innerHTML = mensage;
    msg_text.style.color = red;
    msg_signin.style.display = "flex";
  }
}
function Success_Css_show(mensage) {
  if (mensage != null) {
    msg_text.innerHTML = mensage;
    msg_text.style.color = dark_green;
    msg_signin.style.display = "flex";
    dot.style.display = "flex"
  }
}

//Logout and return to login page//
function LogUserOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("activeUser");
  window.location.href = signInLocalhost;
}