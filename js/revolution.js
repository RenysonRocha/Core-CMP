//Main Functions Revolution
//Part list functions
//Event to run the button if the click happens
let bomButton = document.querySelector('.bom_btn');
let checkIplButton = document.querySelector('.checkIpl_command');
let fillIsnButton = document.querySelector('.fillIsn_command');
let checkDflButton = document.querySelector('.checkDfl_command');
let updatedDbButton = document.querySelector('.updatedDb_command');

bomButton.addEventListener('click', importBom);
checkIplButton.addEventListener('click', CrossIplxBom);
fillIsnButton.addEventListener('click', FillIsnCsnManufacCode);
checkDflButton.addEventListener('click', FillDfl);
updatedDbButton.addEventListener('click', UpdateDatabase);

//Function to import the BOM from SCCZ site   
function importBom() { 
  let actionDone =""  
  //Event to initiate the file dialog after the user click in the bom button
  var bomSelector = document.getElementById('bomSelect')
  bomSelector.click();

  //event to run the bom format after the user select the file in the file dialog
  bomSelector.addEventListener('change',()=>{
    var bomFile = document.getElementById('bomSelect').files[0].name.toUpperCase()
    if (bomFile === 'BOM.TXT') 
      {
        //start of bom format
        alert(bomFile)
        var bomTxt=new FileReader();
        bomTxt.onload=function(){
          let trBom = document.createElement('tr')
          let tdBom = document.createElement('td')
          
          trBom.setAttribute("id","tableBomList")
          tdBom.innerHTML = fr.result;
          trBom.appendChild(tdBom)
          let tableBom = document.getElementById('list_Table_Bom').appendChild(trBom)
        }
              
        fr.readAsText(this.files[0]);
        
        //End of bom format

        //Code to set the progress as done and increase the progress bar
        actionDone = "Complete"
        increaseProgressBar("bom_command", actionDone, 2);
      }
  });
}
//Function to cross IPLxBOM
function CrossIplxBom() { 
  /*

    Add the CrossIplxBom code here 

  */
  let actionDone = "Incomplete"
  increaseProgressBar("checkIpl_command", actionDone, 2);
}
//Function to Fill the ISN CSN and Manufac Code
function FillIsnCsnManufacCode() { 
  /*

    Add the CossIplxBom code here 

  */
  let actionDone = "Complete"
  increaseProgressBar("fillIsn_command", actionDone, 2);
}

//Function to Fill the DFL (Description for location)
function FillDfl() { 
  /*

    Add the CossIplxBom code here 

  */
  let actionDone = "Complete"
  increaseProgressBar("checkDfl_command", actionDone, 2);
}

//Function to Fill the ISN CSN and Manufac Code
function UpdateDatabase() { 
  /*

    Add the CossIplxBom code here 

  */
  let actionDone = "Incomplete"
  increaseProgressBar("updatedDb_command", actionDone, 2);
}



//function to increase the progress bar
function increaseProgressBar(buttonCommandId, actionDone, increaseValue)
  {
    let buttonId = document.querySelector(`.${buttonCommandId}`)
    let progressBar = document.querySelector(".progress_bar");
    let progressStatus = buttonId.querySelector('.status_bar_icon');
    let progressBarValue = progressBar.value;

    //Create the div with the status bar
    if (progressStatus === null)
    {
      let div = document.createElement('div')
      div.classList.add("status_bar_icon");
      switch (actionDone) {
        case "Complete":          
          div.classList.add("status_ok");
          buttonId.appendChild(div);
          break;
      
        case "Incomplete":
          div.classList.add("status_error");
          buttonId.appendChild(div);
          break;
      }
    }
    // Increase the progress bar in plus one
    if (progressStatus != null && progressBar.value > 0)
    {
      progressBar.value  =  progressBarValue

    } else
    {
      if (progressBar.value < 10) {

        progressBar.value = progressBarValue + increaseValue;

      }
    }
  }

