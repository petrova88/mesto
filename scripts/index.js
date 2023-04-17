

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
// const likes = document.querySelectorAll('.photo__like');


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
// likes.forEach((item) => {
//     item.addEventListener('click', () =>
//     item.classList.toggle('photo__like_active'));
// });

const initialCards = [
  {
    name: 'Красная площадь',
    link: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1660224319946-d83b01a57321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552857406-14af62dbf053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Москва сити',
    link: 'https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Судак',
    link: 'https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1561885121-45d5a4b8b82b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];

// добавить карточки
const photoTemplate = document.getElementById('photo-template');
const photosContainer = document.querySelector('.photos');

const createPhotoElement = (photoData) => {
  const photoElement = photoTemplate.content.querySelector('.photo').cloneNode(true);
  const photoImage = photoElement.querySelector('.photo__image');
  const photoText = photoElement.querySelector('.photo__text');
  const photoTrash = photoElement.querySelector('.photo__trash');
  const likes = photoElement.querySelector('.photo__like');


  photoText.textContent = photoData.name;
  photoImage.src = photoData.link;
  photoImage.alt = photoData.name;

  const handleDelete = () => {
    photoElement.remove();
  };

  const handleLike = () => {
    likes.classList.toggle('photo__like_active');
  };

  photoTrash.addEventListener('click', handleDelete);
  likes.addEventListener('click', handleLike);

  return photoElement;
};

initialCards.forEach((photoData) => {
  const element = createPhotoElement(photoData);
  photosContainer.append(element);
});



