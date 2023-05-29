class FormValidator {
  constructor(selector, form) {
    this._form = form;
    this._selector = selector;
    this._formSelector = form.formSelector;
    this._inputSelector = form.inputSelector;
    this._submitButtonSelector = form.submitButtonSelector;
    this._inactiveButtonClass = form.inactiveButtonClass;
    this._inputErrorClass = form.inputErrorClass;
    this._errorClass = form.errorClass;
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
      if (input.validity.valid) {
        this._changeButtonState();
      }
    });
  };
}

export { FormValidator };