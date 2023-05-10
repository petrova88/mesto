const initialCards = [
  {
    name: "Красная площадь",
    link: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1660224319946-d83b01a57321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Байкал",
    link: "https://images.unsplash.com/photo-1552857406-14af62dbf053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Москва сити",
    link: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Судак",
    link: "https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1561885121-45d5a4b8b82b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

// const popup = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupEditButton = document.querySelector(".edit-button");
const profileCloseButton = popupEdit.querySelector(".popup__close-btn");
const inputName = document.querySelector(".popup__input_name");
const inputJob = document.querySelector(".popup__input_job");
const nameInProfile = document.querySelector(".profile__title");
const jobInProfile = document.querySelector(".profile__subtitle");
const profileForm = document.querySelector(".popup__input-container");
const popupAdd = document.querySelector(".popup_mesto");
const popupAddButton = document.querySelector(".add-button");
const popupPhoto = document.querySelector(".popup-image");
const inputTitle = document.querySelector(".popup__input_title");
const inputLink = document.querySelector(".popup__input_link");
const photoTemplate = document.getElementById("photo-template");
const photosContainer = document.querySelector(".photos");
const popupPhotoImage = document.querySelector(".popup-image__image");
const popupPhotoText = document.querySelector(".popup-image__text");
const popupList = Array.from(document.querySelectorAll(".popup"));
const popupImageCloseBtn = document.querySelector(".popup-image__close-btn");
const popup = document.querySelectorAll(".popup");

const openPopup = (popupOpened) => {
  popupOpened.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

const closePopup = (popupOpened) => {
  popupOpened.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

const openPopupEdit = () => {
  inputName.value = nameInProfile.textContent;
  inputJob.value = jobInProfile.textContent;
  openPopup(popupEdit);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  nameInProfile.textContent = inputName.value;
  jobInProfile.textContent = inputJob.value;
  closePopup(popupEdit);
};

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

const closePopupOverlay = (popupElement, evt) => {
  const isOverlay = evt.target.classList.contains("popup");
  const isCloseButton = evt.target.classList.contains("popup__close-btn");

  if (isOverlay || isCloseButton) {
    closePopup(popupElement);
  }
};

document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    closePopupOverlay(popup, evt);
  });
});

const createPhotoElement = (photoData) => {
  const photoElement = photoTemplate.content
    .querySelector(".photo")
    .cloneNode(true);
  const photoImage = photoElement.querySelector(".photo__image");
  const photoText = photoElement.querySelector(".photo__text");
  const photoTrash = photoElement.querySelector(".photo__trash");
  const likes = photoElement.querySelector(".photo__like");

  photoText.textContent = photoData.name;
  photoImage.src = photoData.link;
  photoImage.alt = photoData.name;

  const handleDelete = () => {
    photoElement.remove();
  };

  const handleLike = () => {
    likes.classList.toggle("photo__like_active");
  };

  // увеличить изображение
  const seeBigPhoto = () => {
    popupPhotoImage.src = photoData.link;
    popupPhotoText.textContent = photoData.name;
    popupPhotoImage.alt = photoData.name;

    openPopup(popupPhoto);
  };

  photoImage.addEventListener("click", seeBigPhoto);
  photoTrash.addEventListener("click", handleDelete);
  likes.addEventListener("click", handleLike);
  return photoElement;
};

initialCards.forEach((photoData) => {
  const element = createPhotoElement(photoData);
  photosContainer.append(element);
});

popupAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newNameLink = { name: inputTitle.value, link: inputLink.value };
  const elementMesto = createPhotoElement(newNameLink);
  photosContainer.prepend(elementMesto);
  evt.target.reset();
  evt.submitter.classList.add("popup__submit-btn_invalid");
  evt.submitter.disabled = true;

  closePopup(popupAdd);
});

popupEditButton.addEventListener("click", openPopupEdit);
profileCloseButton.addEventListener("click", () => closePopup(popup));
profileForm.addEventListener("submit", handleProfileFormSubmit);
popupAddButton.addEventListener("click", () => openPopup(popupAdd));
