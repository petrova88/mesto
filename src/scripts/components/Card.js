export default class Card {
  constructor(photoData, templateSelector, seeBigPhoto, openDeletePopup, changeLike) {
    // console.log(photoData);
    this._photoData = photoData;
    this._link = photoData.link;
    this._title = photoData.name;
    this._myId = photoData.myId;
    this._ownerId = photoData.ownerId;
    this._seeBigPhoto = seeBigPhoto;
    this._openDeletePopup = openDeletePopup;
    this._likes = photoData.likes;
    this._likesLength = photoData.likes.length;
    this._changeLike = changeLike;
    this._cardId = photoData.owner._id;

    this._cardElement = document
      .querySelector(templateSelector)
      .content.querySelector(".photo")
      .cloneNode(true);
    this._trashElement = this._cardElement.querySelector('.photo__trash');
    this._likeElement = this._cardElement.querySelector('.photo__like');
    this._imageElement = this._cardElement.querySelector('.photo__image');
    this._subtitle = this._cardElement.querySelector('.photo__text');
    this._counter = this._cardElement.querySelector('.photo__counter');
  }

  _handleLike() {
    this._changeLike(this._likeElement, this._cardId);
    // this._likeElement.classList.toggle("photo__like_active");
  }

  _handleDelete() {
    this._openDeletePopup({ card: this, cardId: this._cardId });
  }

  _openPhoto() {
    this._seeBigPhoto(this._photoData);
  }

  _setEventListener = () => {
    this._likeElement.addEventListener("click", this._handleLike.bind(this));
    this._photoDeleteBtn.addEventListener(
      "click",
      this._handleDelete.bind(this)
    );
    this._photoImage.addEventListener("click", this._openPhoto.bind(this));
  };

  _changeVisibleForTrashButton() {
    this._myId === this._ownerId ? this._trashElement.style.display = 'block' : this._trashElement.style.display = 'none'
  }

  _checkLikeStatus() {
    this._likes.forEach(like => {
      if (like._id === this._myId) {
        this._likeElement.classList.add("photo__like_active");
        return 
      }
    })
    this._counter.textContent = this._likesLength
  }

  toggleLike(dataLikes) {
    this._likeElement.classList.toggle("photo__like_active");
    this._counter.textContent = dataLikes.length
  }

  removeCard() {
    this._cardElement.remove();
    // this._cardElement = null;
  }

  createCard = () => {
    this._photoImage = this._cardElement.querySelector(".photo__image");
    this._photoText = this._cardElement.querySelector(".photo__text");
    this._photoDeleteBtn = this._cardElement.querySelector(".photo__trash");
    this._likeElement = this._cardElement.querySelector(".photo__like");

    this._photoImage.src = this._photoData.link;
    this._photoImage.alt = this._photoData.name;
    this._photoText.textContent = this._photoData.name;
    this._checkLikeStatus();
    this._changeVisibleForTrashButton();
    this._setEventListener();
    return this._cardElement;
  };
}
