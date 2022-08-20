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
 var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslation(text)
{
    return serverURL+"?"+"text"+text
}
function errorhandler()
{
    console.log("error occured",error)
    alert("something wrong with server : try again after some time")
}
function clickEventHandler()
{
    var inputText=txtInput.value ;//taking input
    fetch(getTranslation(inputText))
    .then(response=>response.json())
    // .then(json => console.log(json.contents.translated))
    .then(json=> 
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorhandler)
}
// function clickEventHandler(){

//     outputDiv.innerText="fshbcsjacluw " + txtInput.value;

//     // console.log("clicked");

//     // // this below line is used for reading input from user via document
//     // console.log("input",txtInput.value);

// }

btntranslate.addEventListener("click", clickEventHandler)

