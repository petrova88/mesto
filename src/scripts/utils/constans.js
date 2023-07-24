const initialCards = [
  {
    title: "Красная площадь",
    link: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1660224319946-d83b01a57321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    title: "Байкал",
    link: "https://images.unsplash.com/photo-1552857406-14af62dbf053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    title: "Москва сити",
    link: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Судак",
    link: "https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "Сочи",
    link: "https://images.unsplash.com/photo-1561885121-45d5a4b8b82b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

const popupEditButton = document.querySelector(".edit-button");
const formEditProfile = document.forms["edit-form"];
const formAddCard = document.forms["add-form"];
const formEditAvatar = document.forms["form-avatar"];
const popupAddButton = document.querySelector(".add-button");
const openEditAvatarBtn = document.querySelector(".profile__avatar-btn");

const userDataSectionSelectors = {
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
  profileAvatar: ".profile__image",
};

const validationConfig = {
  formSelector: ".popup__input-container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_invalid",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error",
};

export {
  initialCards,
  popupEditButton,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  openEditAvatarBtn,
  popupAddButton,
  userDataSectionSelectors,
  validationConfig,
};
