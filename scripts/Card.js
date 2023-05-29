class Card {
    constructor(photoData, seeBigPhoto) {
      this._photoData = photoData;
      this._name = photoData.name;
      this._seeBigPhoto = seeBigPhoto;
  
      this._cardElement = document // переименовала
        .querySelector(".photo-template")
        .content.querySelector(".photo")
        .cloneNode(true);
    }
  
    _handleLike() {
      this._photoLikeBtn.classList.toggle("photo__like_active");
    }
  
    _handleDelete() {
      this._cardElement.remove();
    }
  
    _openPhoto() {
      this._seeBigPhoto(this._photoData);
    }
  
    _setEventListener = () => {
      this._photoLikeBtn.addEventListener("click", this._handleLike);
      this._photoDeleteBtn.addEventListener("click", this._handleDelete);
      this._photoImage.addEventListener("click", this._openPhoto);
    };
  
    createCard() {
      this._photoImage = this._cardElement.querySelector(".photo__image");
      this._photoText = this._cardElement.querySelector(".photo__text");
      this._photoDeleteBtn = this._cardElement.querySelector(".photo__trash");
      this._photoLikeBtn = this._cardElement.querySelector(".photo__like");
  
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardTitle.textContent = this._name;
      this._setEventListener();
      return this._cardElement;
    }
  }
  
  export { Card };