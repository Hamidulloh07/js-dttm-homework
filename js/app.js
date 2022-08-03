var elForm = document.querySelector(".demo__form");
var elInput = document.querySelector(".demo__input");
var elSelect = document.querySelector(".demo__select");

var elOutput = document.querySelector(".demo__output"); 
var selectValue = (elSelect.value)

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  var inputValue = (elInput.value)
  

  if (inputValue >= 0  && inputValue <= 120 ) {
    // elInput.value = ""
    elOutput.textContent = " Siz imtixondan ota olmadingiz"
  } 

  else if (inputValue < 0) {
    elOutput.textContent = "bu musbat son manfiy son kiriting"
  }

  else if (inputValue <= 140 && inputValue >= 120){
    elOutput.textContent = "Tabriklaymiz  kantraktga kirdingiz"
  }
    

  else if (inputValue > 160  && inputValue >= 140){
    elOutput.textContent = "Tabriklaymiz  budjetga kirdingiz"
    }
    
  else if (isNaN(elInput.value)){
    elOutput.textContent = "siz son bilan kiritishingiz kerak"
  }
  
  else {
    // elInput.value = ""
    elOutput.textContent = "Tabriklaymiz budjetga kirdingiz"
    if (inputValue >=121) {

    }
  }
 console.log(`necha bal, ${inputValue} 
universitet, ${elSelect.value}`
  ); 
});

