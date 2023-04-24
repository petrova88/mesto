const popupEdit = document.querySelector('.popup_edit');
const popupEditButton = document.querySelector('.edit-button');
const popupEditCloseBtn = popupEdit.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameInProfile = document.querySelector('.profile__title');
const jobInProfile = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__input-container');

const popupAdd = document.querySelector('.popup_mesto');
const popupAddCloseBtn = popupAdd.querySelector('.popup__close-btn');
const popupAddButton = document.querySelector('.add-button');


const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
};

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
};

const openPopupEdit = () => {
  nameInput.value =  nameInProfile.textContent;
  jobInput.value = jobInProfile.textContent;
  openPopup(popupEdit);
};

// сохранить данные из input в ред профиля
const handleFormSubmit = (evt) => {
    evt.preventDefault();
    nameInProfile.textContent = nameInput.value;
    jobInProfile.textContent = jobInput.value;
    closePopup(popupEdit);
};

// попап редактирования
popupEditButton.addEventListener('click', openPopupEdit);
popupEditCloseBtn.addEventListener('click', () => closePopup(popupEdit));
formElement.addEventListener('submit', handleFormSubmit);

// попап добавления
popupAddButton.addEventListener('click', () => openPopup(popupAdd));
popupAddCloseBtn.addEventListener('click', () => closePopup(popupAdd));

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

// добавить карточки из массива
const photoTemplate = document.getElementById('photo-template');
const photosContainer = document.querySelector('.photos');

const createPhotoElement = (photoData) => {
  const photoElement = photoTemplate.content.querySelector('.photo').cloneNode(true);
  const photoImage = photoElement.querySelector('.photo__image');
  const photoText = photoElement.querySelector('.photo__text');
  const photoTrash = photoElement.querySelector('.photo__trash');
  const likes = photoElement.querySelector('.photo__like');
  const popupPhoto = document.querySelector('.popup-image');
  const popupPhotoCloseBtn = popupPhoto.querySelector('.popup__close-btn');

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

  // увеличить изображение
  const seeBigPhoto = () => {
    const popupPhotoImage = document.querySelector('.popup-image__image');
    const popupPhotoText = document.querySelector('.popup-image__text');

    popupPhotoImage.src = photoData.link;
    popupPhotoText.textContent = photoData.name;
    popupPhotoImage.alt = photoData.name;

    openPopup(popupPhoto);
  };


  photoImage.addEventListener('click', seeBigPhoto);

  popupPhotoCloseBtn.addEventListener('click', () => closePopup(popupPhoto));

  return photoElement;
};

initialCards.forEach((photoData) => {
  const element = createPhotoElement(photoData);
  photosContainer.append(element);
});

// создать карточку из попапа
const inputTitle = document.querySelector('.popup__input_title');
const inputLink = document.querySelector('.popup__input_link');

popupAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newNameLink = { name:inputTitle.value, 
                        link:inputLink.value }
  const elementMesto = createPhotoElement(newNameLink);
  photosContainer.prepend(elementMesto);
  closePopup(popupAdd);
});

