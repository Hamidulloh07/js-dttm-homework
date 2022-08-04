var elForm = document.querySelector(".demo__form");
var elInput = document.querySelector(".demo__input");
var elSelect = document.querySelector(".demo__select");

var elOutput = document.querySelector(".demo__output")
var elText = document.querySelector(".hero")


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var inputValue = (elInput.value);
  var selectValue = (elSelect.value);


  if (inputValue >= 120 && inputValue <=  139) {
    elOutput.textContent = "supper kantraktga kirdingiz"
  } 


  else if (inputValue >= 140 && inputValue <=  159) {
    elOutput.textContent = "kantraktga kirdingiz"
  } 

  
  
  else if (inputValue >= 160 && inputValue <= 200) {
    elOutput.textContent = "siz budjetga kirdingiz";
  }
  else if (inputValue > 200) {
    elOutput.textContent = "chegaralangan bal 200";

  }

  else if (inputValue < 0) {
    elOutput.textContent = "manfiy son kiriting"

  }

  
  else if (isNaN(inputValue)) {
    elOutput.textContent = "son kirit"
  }




  else {
    elOutput.textContent = "siz ota olmadingiz";

  }


  if (selectValue) {
    elText.textContent = ` ${selectValue}`
    
  } else {

  }
  
  console.log(`${inputValue}
${selectValue}`)
    
})


