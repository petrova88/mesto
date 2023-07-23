import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector(".popup__input-container");
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitFunction(this._element);
        });
    }

    open = ({card, cardId}) => {
        super.open();
        this.element = card;
        this._cardId = cardId;
    }

    close() {
        super.close();
    }
}