class FormValidator {
  constructor(selector, form) {
    this._form = form;
    this._selector = selector;
    this._formSelector = selector.formSelector;
    this._inputSelector = selector.inputSelector;
    this._submitButtonSelector = selector.submitButtonSelector;
    this._inactiveButtonClass = selector.inactiveButtonClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._errorClass = selector.errorClass;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _showInputError(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    this._errorElement.textContent = input.validationMessage;
    input._errorElementt.add(this._errorClass);
  }

  _hideInputError(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = input.validationMessage;
    input._errorElementt.remove(this._errorClass);
  }

  _activeButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _deactivateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _changeButtonState() {
    if (this._hasInvalidInput()) {
      this._deactivateButton();
    } else {
      this._activateButton();
    }
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _setValidationEventListeners() {
    this._changeButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._changeButtonState();
      });
    });
  }
}

enableValidation = () => {
  this._formList = Array.from(document.querySelectorAll(this._formSelector));
  this._formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setValidationEventListeners();
  });
};

resetError = () => {
  this._inputList.forEach((input) => {
    this._hideInputError(input);
    if (input.validity.valid) {
      this._activateButton();
    } else {
      this._deactivateButton();
    }
  });
};

export { FormValidator };

// enableValidation({
//   formSelector: ".popup__input-container",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__submit-btn",
//   inactiveButtonClass: "popup__submit-btn_invalid",
//   inputErrorClass: "popup__input_invalid",
//   errorClass: "popup__input-error",
// });

// const showInputError = (selector, formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   errorElement.classList.add(selector.errorClass);
//   errorElement.textContent = inputElement.validationMessage;
//   inputElement.classList.add(selector.inputErrorClass);
// };

// const hideInputError = (selector, formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   errorElement.classList.remove(selector.errorClass);
//   errorElement.textContent = "";
//   inputElement.classList.remove(selector.inputErrorClass);
// };

// const checkInputValidity = (selector, formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(selector, formElement, inputElement);
//   } else {
//     hideInputError(selector, formElement, inputElement);
//   }
// };

// const changeButtonState = (selector, inputList, buttonElement) => {
//   if (inputList.some((inputElement) => !inputElement.validity.valid)) {
//     buttonElement.classList.add(selector.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(selector.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// const setEventListeners = (selector, formElement) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(selector.inputSelector)
//   );
//   const buttonElement = formElement.querySelector(
//     selector.submitButtonSelector
//   );

//   formElement.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     changeButtonState(selector, inputList, buttonElement);
//   });

//   changeButtonState(selector, inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       checkInputValidity(selector, formElement, inputElement);
//       changeButtonState(selector, inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = (selector) => {
//   const inputList = document.querySelectorAll(selector.formSelector);
//   Array.from(inputList).forEach((formElement) => {
//     setEventListeners(selector, formElement);
//   });

//   const resetFormValidation = (popupElement) => {
//     const formElement = popupElement.querySelector(selector.formSelector);
//     if (formElement) {
//       const inputList = formElement.querySelectorAll(selector.inputSelector);
//       inputList.forEach((inputElement) => {
//         hideInputError(selector, formElement, inputElement);
//       });
//     }
//   };
// }
