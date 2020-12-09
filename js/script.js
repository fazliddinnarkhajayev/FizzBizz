var elForm = document.querySelector(`.form`);
var elFormInput = elForm.querySelector(`.form__input`);
var elFormButton = elForm.querySelector(`.form__button`);
var elFormText = elForm.querySelector(`.form__text`);

elForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

  var result = elFormInput.value;
  if (result % 3 === 0 && result % 5 === 0){
  elFormText.textContent = `BuzzFizz`;
  }else if (result % 5 === 0 ){
  elFormText.textContent = `Buzz`;
  }else if (result % 3 === 0 ){
  elFormText.textContent = `Fizz`;
  }else{
   elFormText.textContent =`error`
  }

});


// var result = elFormInput.value;
// if (result % 3 === 0 && result % 5 === 0){
// elFormText.textContect = `FizzBuzz`;
// }else if (result % 5 === 0 ){
// elFormText.textContect = `Buzz`;
// }else if (result % 3 === 0 ){
// elFormText.textContent = `Fizz`;
// }else{
//  elFormText.textContent =`error`
// }
