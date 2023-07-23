export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    // this._initialCards = items;
    this.renderer = renderer;
  }

  addCardFromArray(dataCard) {
    dataCard.forEach((element) => {
      this.renderer(element);
    });
  }

  addItemPrepend(elementDom) {
    this._container.prepend(elementDom);
  }

  addItemAppend(elementDom) {
    this._container.append(elementDom);
  }
}
