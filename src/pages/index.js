import '../pages/index.css';
import {
  initialCards,
  popupEditButton,
  formEditProfile,
  formAddCard,
  formEditAvatar,
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
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';

const profileAvatar =  document.querySelector('.profile__image');
const openEditAvatarBtn = document.querySelector('.profile__avatar-btn');
const cardDeleteBtn = document.querySelector('.photo__trash');
const popup = document.querySelector('.photo__trash');

// информация о пользователе
const userInfo = new UserInfo(configInfo);

// попап с карточкой
const popupImage = new PopupWithImage(".popup-image");

const popupDeleteCard = new PopupDeleteCard('.popup-delete', (card) => {
  card.removeCard();
  popupDeleteCard.close();
})

function createNewCard(element) {
  const card = new Card(element, ".photo-template", popupImage.open, popupDeleteCard.open);
  return card.createCard();
}

// отрисовка карточек
const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      section.addItem(createNewCard(element));
    },
  },
  ".photos"
);

section.addCardFromArray();

// редактирование профиля
const popupProfile = new PopupWithForm(".popup_edit", (evt) => {
  // evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});

// добавление карточек
const popupAddCard = new PopupWithForm(".popup_mesto", () => {
  section.addItem(createNewCard(popupAddCard.getInputValues())); // изменила
  popupAddCard.close();
});

const popupEditAvatar = new PopupWithForm('.popup-avatar', (data) => {
  profileAvatar.src = data.avatar;
  popupEditAvatar.close();
});

// валидация
const formProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(validationConfig, formEditAvatar);
formEditValidator.enableValidation();

// слушатели
popupImage.setEventListeners();
popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

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

openEditAvatarBtn.addEventListener('click', () => {
  formEditValidator.resetValidationState();
  popupEditAvatar.open();
})

