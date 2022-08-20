// // console.log("script is working from a diff file")
// // input 
// var user=prompt("give me your user name")
// // process
// var welcomeMsg="this script works"+user
// // output

// alert(welcomeMsg)

var btntranslate=document.querySelector("#btn-trans")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")

// outputDiv.innerText="prateek kamra "
// above line will display the text in output box 


// console.log(outputDiv)
// console.log(txtInput)

// console.log(btntranslate)
function clickEventHandler(){

    outputDiv.innerText="fshbcsjacluw " + txtInput.value;

    // console.log("clicked");

    // // this below line is used for reading input from user via document
    // console.log("input",txtInput.value);

}

btntranslate.addEventListener("click", clickEventHandler)

