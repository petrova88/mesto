const showInputError = (selector, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(selector.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(selector.inputErrorClass);
};

const hideInputError = (selector, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(selector.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(selector.inputErrorClass);
};

const checkInputValidity = (selector, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(selector, formElement, inputElement);
    } else {
      hideInputError(selector, formElement, inputElement);
    }
};

const changeButtonState = (selector, inputList, buttonElement) => {
    if (inputList.some(inputElement => !inputElement.validity.valid)) {
      buttonElement.classList.add(selector.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(selector.inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

const setEventListeners = (selector, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selector.inputSelector));
    const buttonElement = formElement.querySelector(selector.submitButtonSelector);
  
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      changeButtonState(selector, inputList, buttonElement);
    });

    changeButtonState(selector, inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(selector, formElement, inputElement);
        changeButtonState(selector, inputList, buttonElement);
      })
    });
};

const enableValidation = (selector) => {
    const inputList = document.querySelectorAll(selector.formSelector);
    Array.from(inputList).forEach((formElement) => {
        setEventListeners(selector, formElement);
    });

    const resetFormValidation = ((popupElement) => {
        const formElement = popupElement.querySelector(selector.formSelector);
        if (formElement) {
            const inputList = formElement.querySelectorAll(selector.inputSelector);
            inputList.forEach((inputElement) => {
                hideInputError(selector, formElement, inputElement);
            })
        }
    })
};

enableValidation({
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error'
});