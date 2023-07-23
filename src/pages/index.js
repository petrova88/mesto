import "../pages/index.css";
import {
  initialCards,
  popupEditButton,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  openEditAvatarBtn,
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
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";
import Api from "../scripts/components/Api.js";
import { data } from "jquery";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "787e11ee-9b4b-410c-9b50-ed5bea3ae31d",
    "Content-Type": "application/json",
  },
});

// добрый день! у меня есть проблема с лайками - выходит ошибка
// и с корзиной - она не видна даже на моих карточках
// наставник сказал, что проблема на стороне практику и с сервером
// посмотрите, пожалуйста

// информация о пользователе
const userInfo = new UserInfo(configInfo);

// попап с карточкой
const popupImage = new PopupWithImage(".popup-image");

const popupDeleteCard = new PopupDeleteCard(
  ".popup-delete",
  ({ card, cardId }) => {
    api
      .deleteCard(cardId)
      .then(() => {
        card.removeCard();
        popupDeleteCard.close();
      })
      .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
      .finally();
  }
);

function createNewCard(element) {
  const card = new Card(
    element,
    ".photo-template",
    popupImage.open,
    popupDeleteCard.open,
    (likeElement, cardId) => {
      if (likeElement.classList.contains("photo__like_active")) {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) => console.error(`Ошибка при снятии лайка ${error}`));
      } else {
        api
          .addLike(cardId)
          .then((res) => {
            card.toggleLike(res.likes);
          })
          .catch((error) =>
            console.error(`Ошибка при добавлении лайка ${error}`)
          );
      }
    }
  );
  return card.createCard();
}

// отрисовка карточек
const section = new Section((element) => {
  section.addItemAppend(createNewCard(element));
}, ".photos");

// редактирование профиля
const popupProfile = new PopupWithForm(".popup_edit", (data) => {
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({
        username: res.name,
        job: res.about,
        avatar: res.avatar,
      });
      popupProfile.close();
    })
    .catch((error) =>
      console.error(`Ошибка при редактировании профиля ${error}`)
    )
    .finally(() => popupProfile.setupDefaultText());
});

// добавление карточек
const popupAddCard = new PopupWithForm(".popup_mesto", (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myId = dataUser._id;
      section.addItemPrepend(createNewCard(dataCard));
      popupAddCard.close();
    })
    .catch((error) =>
      console.error(`Ошибка при создании новой карточки ${error}`)
    )
    .finally(() => popupAddCard.setupDefaultText());
});

const popupEditAvatar = new PopupWithForm(".popup-avatar", (data) => {
  api
    .setNewAvatar(data)
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo({
        username: res.name,
        job: res.about,
        avatar: res.avatar,
      });
      popupEditAvatar.close();
    })
    .catch((error) => console.error(`Ошибка при обновлении аватара ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText());
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

openEditAvatarBtn.addEventListener("click", () => {
  formEditValidator.resetValidationState();
  popupEditAvatar.open();
});

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach((element) => (element.myId = dataUser._id));
    userInfo.setUserInfo({
      username: dataUser.name,
      job: dataUser.about,
      avatar: dataUser.avatar,
    });
    section.addCardFromArray(dataCard);
  })
  .catch((error) =>
    console.error(`Ошибка при создании начальных данных страницы ${error}`)
  );
