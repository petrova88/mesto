import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector(".popup__input-container");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__submit-btn");
    this._defaultSubmitButton = this._submitButton.textContent;
  }

  getInputValues() {
    this._value = {};
    this._inputList.forEach((input) => {
      this._value[input.name] = input.value;
    });
    return this._value;
  }

  setInputValues(configInfo) {
    this._inputList.forEach((input) => {
      input.value = configInfo[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this.getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setSubmitButtonText(text) {
    this._submitButton.textContent = text;
  }

  unsetSubmitButtonText() {
    this._submitButton.textContent = this._defaultSubmitButton;
  }
}
