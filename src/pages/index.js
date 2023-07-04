import {
  initialCards,
  popupEditButton,
  formEditProfile,
  formAddCard,
  popupAddButton,
  configInfo,
  validationConfig,
} from "../scripts/utils/constans.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

// информация о пользователе
const userInfo = new UserInfo(configInfo);

// попап с карточкой
const popupImage = new PopupWithImage(".popup-image");

// отрисовка карточек
const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, ".photo-template", popupImage.open);
      return card.createCard();
    },
  },
  ".photos"
);

section.addCardFromArray();

// редактирование профиля
const popupProfile = new PopupWithForm(".popup_edit", (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});

// добавление карточек
const popupAddCard = new PopupWithForm(".popup_mesto", (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValues()));
  popupAddCard.close();
});

// валидация
const formProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

// слушатели
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();

// слушатели для открытия форм
popupEditButton.addEventListener("click", () => {
  formProfileValidator.resetValidationState();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

popupAddButton.addEventListener("click", () => {
  formAddValidator.resetValidationState();
  popupAddCard.open();
});
