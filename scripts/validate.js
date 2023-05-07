const formElement = document.querySelectorAll('.popup__input-container');
const formInput = document.querySelectorAll('.popup__input');
const buttonElement = document.querySelectorAll('.popup__submit-btn')

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input_invalid');
  };

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_invalid');
    errorElement.classList.remove('popup__input_invalid');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

const isFormValid = (inputList) => { 
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid; 
    });
};

const deactiveButton = (buttonElement, obj) => {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }
  
  const activeButton = (buttonElement, obj) => {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
  }


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
      });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__input-container'));
    
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement);
  });
};

enableValidation({
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}); 