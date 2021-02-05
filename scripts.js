let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button')
let popup = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_info');

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

editButton.addEventListener('click', openPopup); 

function closePopup () {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup ();
  event.preventDefault();
}

formElement.addEventListener('submit', formSubmitHandler);