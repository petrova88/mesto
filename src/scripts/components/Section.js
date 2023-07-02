export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
    this.renderer = renderer;
  }

  addCardFromArray() {
    this._initialCards.forEach((element) => {
      this.addItem(this.renderer(element));
    });
  }

  addItem(elementDom) {
    this._container.prepend(elementDom);
  }

  addNewItem(elementDom) {
    this._container.prepend(elementDom);
  }
}
