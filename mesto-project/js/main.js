// Edit
const editBtn = document.querySelector(".btn_btn_edit");
const closeBtn = document.querySelector(".popup__close");
const popupEdit = document.querySelector(".popup_edit");
const formEdit = document.querySelector(".form-edit");
const nameInput = document.querySelector(".form__input_name");
const roleInput = document.querySelector(".form__input_role");
const formSaveBtn = document.querySelector(".btn_btn_save");
// ProfileInfo
const profileHeading = document.querySelector(".profile__heading");
const profileSubTitle = document.querySelector(".profile__subtitle");
// AddPhoto
const cards = document.querySelector(".hero");
const popupAdd = document.querySelector(".popup_add");
const addBtn = document.querySelector(".btn_btn_add");
const cardTemplate = document.querySelector("#card").content;
const popups = document.querySelectorAll(".popup");
const formAdd = document.querySelector(".form-add");
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

// openPopup && closePopup

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

closeBtn.addEventListener("click", () => {
  closePopup(popupAdd);
});

// editBtn

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileHeading.textContent = nameInput.value;
  profileSubTitle.textContent = roleInput.value;
  closePopup(popupEdit);
}

// Likes && Utils

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

initialCards.forEach((card) => {
  cards.prepend(createCard(card.name, card.link));
});

// addBtn

const cardLink = document.querySelector(".form__input_link");
const cardTitle = document.querySelector(".form__input_title");

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector(".hero__item").cloneNode(true);
  const cardName = cardElement.querySelector(".hero__heading");
  const cardPhoto = cardElement.querySelector(".hero__pic");
  const likeBtn = cardElement.querySelector(".btn_btn_like");
  const cardDel = cardElement.querySelector(".hero__del");

  cardName.innerText = name;
  cardPhoto.alt = name;
  cardPhoto.src = link;

  likeBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("btn_btn_like-active");
  });
  cardDel.addEventListener("click", () => {
    const cardItem = cardDel.closest(".hero__item");
    cardItem.remove();
  });

  return cardElement;
}

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  cards.prepend(createCard(cardTitle.value, cardLink.value));
  closePopup(popupAdd);
  formAdd.reset();
}

formEdit.addEventListener("submit", formSubmitHandler);
formAdd.addEventListener("submit", formSubmitHandlerAdd);
