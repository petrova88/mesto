class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
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
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass); 
    this._errorElement.textContent = input.validationMessage;
    this._errorElement.textContent = '';
  }

  _deactivateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _activateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  _changeButtonState = () => {
    if (this._hasInvalidInput()) { 
      this._deactivateButton();
    } else {
      this._activateButton();
    }
  }

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
        this._showInputError(input);
    } else {
        this._hideInputError(input);
    }
  }

  _setValidationEventListeners = () => {
    this._changeButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._changeButtonState();
      });
    });
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
  
  resetValidationState = () => {
    this._inputList.forEach((input) => { 
        this._hideInputError(input); 
    });
    this._changeButtonState();
  };
}

export { FormValidator };