export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _handleClickByOverlay = (evt) => {
        this._overlay = evt.target.classList.contains("popup");
        this._closeButton = evt.target.classList.contains("popup__close-btn");
      
        if (this._overlay || this._closeButton) {
          this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('click', this._handleClickByOverlay);
        document.removeEventListener('keydown', this._handleEscClose);
    }
    
    setEventListeners() {
        document.addEventListener('click', this._handleClickByOverlay);
        document.addEventListener('keydown', this._handleEscClose);
    }
}