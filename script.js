 
 function aiPoem(response){

    thirdHeader.style.display="none"

    new Typewriter ('#poem', {
  strings: response.data.answer,
  autoStart: true,
   cursor: "",
  delay: 90
});


 }
 
 function poemGenerator(Event){
    Event.preventDefault();

    thirdHeader.innerHTML="It is generating poem..."
    let txtInput=document.querySelector("#txt-input")
    let myApi="c788bbe4fbob842f25a727737f00tc5e"
    let  prompt=`generate me a poem in max 4 line in persian then write that poem on English bellow of persian poem it must be about ${txtInput.value}`
    let context=`it must be max 4 line first it should be in persian then English it should be popular Irainian poem and also use <br> for big spaces between poem lines and aso use<br><br> for wriiting English one and the poems must has right grammer and they must be sensetive and pretty,and at the bottem of all poem write 'more information about persian poems...' at put it in <strong></string> and before it use <br><br> and also in strong tag use <a target="_blank" href="https://en.wikipedia.org/wiki/Persian_literature"></a>`
    let url=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${myApi}`
    
    axios.get(url).then(aiPoem)

}
let thirdHeader=document.querySelector("#third-header")
let formElement=document.querySelector("#form")
formElement.addEventListener("submit",poemGenerator)