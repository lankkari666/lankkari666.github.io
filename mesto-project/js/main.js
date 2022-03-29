const editBtn = document.querySelector(".btn_btn_edit");
const addBtn = document.querySelector(".btn_btn_add");
const closeBtn = document.querySelector(".popup__close");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const form = document.querySelector(".form");
const nameInput = popupEdit.querySelector(".form__input_name");
const roleInput = popupEdit.querySelector(".form__input_role");
const formSaveBtn = document.querySelector(".btn_btn_save");
const profileHeading = document.querySelector(".profile__heading");
const profileSubTitle = document.querySelector(".profile__subtitle");
const cards = document.querySelector(".hero").cloneNode(true);
const card = document.querySelector(".hero__item");
const likeBtns = document.querySelectorAll(".btn_btn_like");
const popups = document.querySelectorAll(".popup");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

editBtn.addEventListener("click", () => {
  openPopup(popupEdit);
  nameInput.value = profileHeading.innerText;
  roleInput.value = profileSubTitle.innerText;
});

addBtn.addEventListener("click", () => {
  openPopup(popupAdd);
});

closeBtn.addEventListener("click", () => {
  closePopup(popupEdit);
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileHeading.textContent = nameInput.value;
  profileSubTitle.textContent = roleInput.value;
  closePopup(popupEdit);
}

form.addEventListener("submit", formSubmitHandler);

// initialCards.forEach((card) => {
//   cards.prepend(createCard(card.name, card.link));
// });

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("btn_btn_like-active");
  });
});
