// // console.log("script is working from a diff file")
// // input 
// var user=prompt("give me your user name")
// // process
// var welcomeMsg="this script works"+user
// // output

// alert(welcomeMsg)

var btntranslate=document.querySelector("#btn-trans")
var txtInput=document.querySelector("#txt-input")

console.log(txtInput)

// console.log(btntranslate)
function clickEventHandler(){

    console.log("clicked");

    // this below line is used for reading input from user via document
    console.log("input",txtInput.value);

}

btntranslate.addEventListener("click", clickEventHandler)

