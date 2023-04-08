const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.edit-button');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameInProfile = document.querySelector('.profile__title');
const jobInProfile = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('popup__input-container');

// открыть попап
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value =  nameInProfile.textContent;
    jobInput.value = jobInProfile.textContent;
}

// закрыть попап
function closePopup() {
    popup.classList.remove('popup_opened');
} 

// сохранить данные из input

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInProfile.textContent = nameInput.value;
    jobInProfile.textContent = jobInput.value;
    closePopup();
}

// сохранить изменения

editPopup.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);