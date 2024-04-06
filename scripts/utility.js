function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

// showing element
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

// adding bg-color to the element
function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// removing bg-color to the element
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// 
function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}
// 
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
   element.innerText=value;
}

// 
function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
}


// alphabet genarate function
function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    // get a random index between 0 - 25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;

}