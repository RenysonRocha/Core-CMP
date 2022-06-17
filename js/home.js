// *********Home function **********
let userProgramDB = {UserGroup: ""};
let localHost = {
  BFE:"",
  MCMM:"",
  REVOLUTION:"./Part List.html",
  SFE:"",
}

//Select the group according to button pressed
function getProgramPage(groupSelected) { 
  switch (groupSelected) {
    case "BFE":
      getUserGroupPermissions(groupSelected)
      break;
    case "MCMM":
      getUserGroupPermissions(groupSelected)
      break;
    case "REVOLUTION":
      getUserGroupPermissions(groupSelected)
      break;
    case "SFE":
      getUserGroupPermissions(groupSelected)
      break;
  }
}
function getUserGroupPermissions(groupSelected) {
  let activeUserDatabase = JSON.parse(localStorage.getItem("activeUser"));
  let UserList = JSON.parse(localStorage.getItem("userList"));
  let hideShowToolTip = document.querySelector(`.${groupSelected}`)
  let userAccess = false
  if (UserList != null) {
    UserList.forEach((item) => {
      switch (true) {
        case activeUserDatabase.userDbLogin == item.login_database:
          userProgramDB = {
            UserGroup: item.groups_database,
          };
          break;
      }
    });

    if (userProgramDB != null) {
      userProgramDB.UserGroup.forEach((program) =>{
        switch (true) {
          case groupSelected == program:
            userAccess = true;
            break;
        }
      });
    }
    if (userAccess) {
      Object.keys(localHost).forEach((program) =>{
        if (groupSelected == program) {window.location.href = localHost[program];}
      });
    } else {
      hideShowToolTip.classList.add('showTooltip')
      hideShowToolTip.innerHTML = "Access Denied";
      setTimeout(() => {hideShowToolTip.classList.remove("showTooltip");}, 2000);
    }
  }
}
