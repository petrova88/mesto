const popup = document.querySelector('.popup'); // сам попап
const editPopup = document.querySelector('.edit-button'); // кнопка редактирования
const popupCloseBtn = document.querySelector('.popup__close-btn');

// функция, которая открывает попап при нажатии на кнопку редактирования
function openPopup() {
    popup.classList.add ('popup_opened');
}
editPopup.addEventListener('click', openPopup); // вторым элементом передаем функцию 

// функция, которая скрывает попап при нажатии на крестик
function closePopup() {
    popup.classList.remove ('popup_opened');
} 
popupCloseBtn.addEventListener('click', closePopup);

// const formElement = document.querySelector('.popup__submit-btn');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');

document.querySelector('.popup__submit-btn').addEventListener('click', handleFormSubmit);

function handleFormSubmit (evt) {
    evt.preventDefault();
    const profileName = document.querySelector('.popup__name').value;
    const profileJob = document.querySelector('.popup__job').value;
    document.querySelector('.profile__title').innerHTML = profileName;
    document.querySelector('.profile__subtitle').innerHTML = profileJob;
    
}
editPopup.addEventListener('click', handleFormSubmit);

const saveBtn = document.querySelector('.popup__submit-btn');
function closeSavePopup () {
    popup.classList.remove ('popup_opened');
}
saveBtn.addEventListener('click', closeSavePopup);