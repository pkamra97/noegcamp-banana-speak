
var btntranslate=document.querySelector("#btn-trans")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output")


 var serverURL= "https://api.funtranslations.com/translate/"
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
    // to show it on outputdiv
    .then(json=> 
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorhandler)
}

btntranslate.addEventListener("click", clickEventHandler)

