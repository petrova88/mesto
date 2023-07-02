import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup-image__image');
        this._imagePopupCaption = this._popup.querySelector('.popup-image__text');
    }

    open = (photoData) => {
        this._popupImage.src = photoData.link;
        this._popupImage.alt = photoData.title;
        this._imagePopupCaption.textContent = photoData.title;
        super.open();
    }
}