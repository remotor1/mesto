let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button')
let popup = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__info');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}); 

closeButton.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
  event.preventDefault();
}

formElement.addEventListener('submit', formSubmitHandler);