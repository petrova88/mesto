import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector(".popup__input-container");
    this._inputList = this._form.querySelectorAll(".popup__input");
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
    this._form.addEventListener("submit", this._submitFunction);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
