import { initialCards } from "./constans.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

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
const photoTemplate = document.querySelector(".photo-template");
const photosContainer = document.querySelector(".photos");
const popupList = Array.from(document.querySelectorAll(".popup"));
const popupImageCloseBtn = document.querySelector(".popup-image__close-btn");
const popups = document.querySelectorAll(".popup");
const formEditProfile = document.forms["edit-form"];
const formAddCard = document.forms["add-form"];
const photoElement = document.querySelector(".popup-image__image");
const photoTitle = document.querySelector(".popup-image__text");

const validationConfig = {
  formSelector: ".popup__input-container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_invalid",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error",
};

const createNewCard = (element) => {
  const card = new Card(element, ".photo-template", seeBigPhoto);
  return card.createCard();
};

const seeBigPhoto = (photoData) => {
  photoElement.src = photoData.link;
  photoElement.alt = photoData.name;
  photoTitle.textContent = photoData.name;
  openPopup(popupPhoto);
};

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
  formProfileValidator.resetValidationState();
  openPopup(popupEdit);
};

const openAddForm = () => {
  formAddCard.reset();
  formAddValidator.resetValidationState();
  openPopup(popupAdd);
};

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  const cardAdd = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  photosContainer.prepend(createNewCard(cardAdd));
  closePopup(popupAdd);
};

const handleProfileFormSubmit = (evt) => {
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

popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    closePopupOverlay(popup, evt);
  });
});

initialCards.forEach((photoData) => {
  photosContainer.append(createNewCard(photoData));
});

const formProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

popupEditButton.addEventListener("click", openPopupEdit);
profileCloseButton.addEventListener("click", () => closePopup(popupEdit));
popupAddButton.addEventListener("click", openAddForm);
formEditProfile.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", handleAddFormSubmit);
