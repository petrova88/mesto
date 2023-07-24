import "../pages/index.css";
import {
  initialCards,
  popupEditButton,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  openEditAvatarBtn,
  popupAddButton,
  userDataSectionSelectors,
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

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "787e11ee-9b4b-410c-9b50-ed5bea3ae31d",
    "Content-Type": "application/json",
  },
});

// информация о пользователе
const userInfo = new UserInfo(userDataSectionSelectors);

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
      .catch((error) => console.error(`Ошибка при удалении карточки ${error}`));
  }
);

function createNewCard(element) {
  const card = new Card(
    element,
    ".photo-template",
    popupImage.open,
    popupDeleteCard.open,
    (likeElement, cardId) => {
      if (card.isLiked(true)) {
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
const cardsSection = new Section((element) => {
  cardsSection.addItemAppend(createNewCard(element));
}, ".photos");

// редактирование профиля
const popupProfile = new PopupWithForm(".popup_edit", (data) => {
  popupProfile.setSubmitButtonText("Сохранение...");
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
    .finally(() => popupProfile.unsetSubmitButtonText());
});

// добавление карточек
const popupAddCard = new PopupWithForm(".popup_mesto", (data) => {
  popupAddCard.setSubmitButtonText("Сохранение...");
  api
    .addCard(data)
    .then((res) => {
      res.myId = res.owner._id;
      cardsSection.addItemPrepend(createNewCard(res));
      popupAddCard.close();
    })
    .catch((error) =>
      console.error(`Ошибка при создании новой карточки ${error}`)
    )
    .finally(() => popupAddCard.unsetSubmitButtonText());
});

const popupEditAvatar = new PopupWithForm(".popup-avatar", (data) => {
  popupEditAvatar.setSubmitButtonText("Сохранение...");
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
    .finally(() => popupEditAvatar.unsetSubmitButtonText());
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
    cardsSection.addCardFromArray(dataCard);
  })
  .catch((error) =>
    console.error(`Ошибка при создании начальных данных страницы ${error}`)
  );
