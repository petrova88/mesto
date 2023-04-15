const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.edit-button');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameInProfile = document.querySelector('.profile__title');
const jobInProfile = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__input-container');
const popupMesto = document.querySelector('.popup-mesto');
const addButton = document.querySelector('.add-button');
const mestoCloseBtn = document.querySelector('.popup-mesto__close-btn');
const likes = document.querySelectorAll('.photo__like');


// попап редактирования профиля
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value =  nameInProfile.textContent;
    jobInput.value = jobInProfile.textContent;
}

// закрыть попап
function closePopup() {
    popup.classList.remove('popup_opened');
} 

// сохранить данные из input в ред профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInProfile.textContent = nameInput.value;
    jobInProfile.textContent = jobInput.value;
    closePopup();
}

// попап добавления
function openMesto() {
    popupMesto.classList.add('popup-mesto_opened');
}

function closeMesto() {
    popupMesto.classList.remove('popup-mesto_opened');
}

// попап редактирования
editPopup.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

// попап добавления
addButton.addEventListener('click', openMesto);
mestoCloseBtn.addEventListener('click', closeMesto);

// поставить лайк
likes.forEach((item) => {
    item.addEventListener('click', () =>
    item.classList.toggle('photo__like_active'));
});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  


