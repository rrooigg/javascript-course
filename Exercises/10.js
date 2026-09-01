console.log(document.querySelector('.js-button').classList.contains('js-button'));

function isToggled(selector) {
  const buttonElement = document.querySelector(`.${selector}`);
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  } else {
    buttonElement.classList.add('is-toggled');
  }
}
  

