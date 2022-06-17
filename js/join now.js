// **********Join now functions*******
//Regiter the user to the local storage
//event to validate if the input typo in the register page is correct
let name_register = document.querySelector("#name_register");
let name_label = document.querySelector("#msg_name");
let valid_name_register = false;

let login_register = document.querySelector("#login_register");
let login_label = document.querySelector("#msg_login");
let valid_login_register = false;

let password_register = document.querySelector("#password_register");
let password_label = document.querySelector("#msg_password");
let valid_password_register = false;

let password_Confirm_register = document.querySelector("#password_Confirm_register");
let password_Confirm_label = document.querySelector("#msg_confirm_password");
let valid_password_Confirm_register = false;

let msg_joinnow = document.getElementById("msg_joinnow");
let msg_text = document.querySelector(".msg_text");
let dot = document.querySelector(".showdot");
switch (true) {
  case name_register != null:
    name_register.addEventListener("keyup", () => {
      if (name_register.value.length <= 3) {
        valid_name_register = Error_Css_JoinNow(
          name_label,
          "Name *(3 or more characters)"
        );
      } else {
        valid_name_register = Success_Css_JoinNow(name_label, "Name");
      }
    });
  case login_register != null:
    login_register.addEventListener("keyup", () => {
      if (login_register.value.indexOf(".") == -1) {
        valid_login_register = Error_Css_JoinNow(
          login_label,
          "Login *(Correct format: Exemple.User)"
        );
      } else {
        valid_login_register = Success_Css_JoinNow(login_label, "Login");
      }
    });
  case password_register != null:
    password_register.addEventListener("keyup", () => {
      if (password_register.value.length <= 5) {
        valid_password_register = Error_Css_JoinNow(
          password_label,
          "Password *(6 or more characters)"
        );
      } else {
        valid_password_register = Success_Css_JoinNow(
          password_label,
          "Password"
        );
      }
    });
  case password_Confirm_register != null:
    password_Confirm_register.addEventListener("keyup", () => {
      if (password_Confirm_register.value != password_register.value) {
        valid_password_Confirm_register = Error_Css_JoinNow(
          password_Confirm_label,
          "Confirm Password *(Password mismatch)"
        );
      } else {
        valid_password_Confirm_register = Success_Css_JoinNow(
          password_Confirm_label,
          "Confirm Password"
        );
      }
    });
}
//Function to create an array with the group the user has access
let input_BFE = document.querySelector("#input_BFE")
let input_MCMM = document.querySelector("#input_MCMM")
let input_REVOLUTION = document.querySelector("#input_REVOLUTION")
let input_SFE = document.querySelector("#input_SFE")
let programAccess = []
//Function to check if all informations are filled and add to the local storage
document.addEventListener("keypress", (btnSubmitLogin) => {
  if (btnSubmitLogin.key === "Enter") {
    validateUserInformation();
  }
});
function validateUserInformation() {
  if (input_BFE.checked){programAccess.push(input_BFE.value);}
  if (input_MCMM.checked) {programAccess.push(input_MCMM.value);} 
  if (input_REVOLUTION.checked) {programAccess.push(input_REVOLUTION.value);}
  if (input_SFE.checked) {programAccess.push(input_SFE.value);}
  if (
    valid_name_register &&
    valid_login_register &&
    valid_password_register &&
    valid_password_Confirm_register &&
    programAccess.length != 0
  ) {
    validateExists()
    addtTolocalStorage();
    let creatingmsg = 'Creating the user access'
    Success_Css_show(creatingmsg);
    setTimeout(() => {
      window.location.href = signInLocalhost;
    }, 3000);
  } else {
    Error_Css_show("Please, fill all the information before submit");
  }
}
//Validate the username and password in the local storage
function validateExists(userinformation) {
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
  }
}
//Add user information to local storage
function addtTolocalStorage() {
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
  userList.push({
    name_database: name_register.value,
    login_database: login_register.value,
    password_database: password_register.value,
    groups_database: programAccess
  });
  localStorage.setItem("userList", JSON.stringify(userList));
}

//Sub functions
//Event to show the password when the eye button is clicked in the join now page
let eyebtn_password = document.querySelector("#eye_Button_password");
let eyebtn_confirm_password = document.querySelector(
  "#eye_Button_confirm_password"
);
switch (true) {
  case eyebtn_password != null:
    eyebtn_password.addEventListener("click", () => {
      switch (password_register.getAttribute("type")) {
        case "password":
          password_register.setAttribute("type", "text");
          password_register.focus();
          break;
        case "text":
          password_register.setAttribute("type", "password");
          password_register.focus();
          break;
      }
    });
  case eyebtn_confirm_password != null:
    eyebtn_confirm_password.addEventListener("click", () => {
      switch (password_Confirm_register.getAttribute("type")) {
        case "password":
          password_Confirm_register.setAttribute("type", "text");
          password_Confirm_register.focus();
          break;
        case "text":
          password_Confirm_register.setAttribute("type", "password");
          password_Confirm_register.focus();
          break;
      }
    });
}
//Functions to format the error or success alert
let dark_green = "#0c738a";
let dark_grey ="#363636";
let light_green ="#b0d1d8";
let light_white ="rgb(245,248,250)";
let light_black ="rgba(0, 0, 0, 0.1)";
let light_grey ="#adacad";
let grey ="grey";
let white ="white";
let red ="red";


function Error_Css_show(mensage) {
  if (mensage != null) {
    msg_text.innerHTML = mensage;
    msg_text.style.color = red;
    msg_joinnow.style.display = "flex";
  }
}
function Success_Css_show(mensage) {
  if (mensage != null) {
    msg_text.innerHTML = mensage;
    msg_text.style.color = dark_green;
    msg_joinnow.style.display = "flex";
    dot.style.display = "flex"
  }
}
function Error_Css_JoinNow(label, mensage) {
  if (mensage != null) {
    label.innerHTML = mensage;
    label.style.color = red;
    confirmation = false;
    return confirmation;
  }
}
function Success_Css_JoinNow(label, mensage) {
  if (mensage != null) {
    label.innerHTML = mensage;
    label.style.color = dark_green;
    confirmation = true;
    return confirmation;
  }
}