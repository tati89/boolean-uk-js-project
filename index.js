let state = [];

function displayPrisoner() {}

function renderPrisoners() {
  const prisonerLi = document.querySelector(".prisoners-li");

  prisonerLi.addEventListener("click", function () {
    renderPrisonerList();
  });
}

function renderPrisonerList() {
  const displayContent = document.querySelector(".display-content");
  displayContent.innerHTML = "";
  for (const prisoner of state.prisoners) {
    renderPrisoner(prisoner);
  }
}

function renderPrisoner(prisoner) {
  const displayContent = document.querySelector(".display-content");
  const prisonerArticle = document.createElement("article");
  prisonerArticle.setAttribute("class", "prisoner-article");
  displayContent.append(prisonerArticle);

  const prisonerTitle = document.createElement("h2");
  prisonerTitle.setAttribute("class", "prisoner-title");
  prisonerTitle.innerText = prisoner.firstName + " " + prisoner.lastName;
  prisonerArticle.append(prisonerTitle);

  const prisonerImg = document.createElement("img");
  prisonerImg.setAttribute("class", "prisoner-img");
  prisonerImg.setAttribute("src", prisoner.picture);
  prisonerImg.setAttribute("alt", prisoner.firstName + " " + prisoner.lastName);
  prisonerArticle.append(prisonerImg);

  const nickname = document.createElement("h3");
  nickname.setAttribute("class", "crime-type");
  nickname.innerText = `Nickname: ${prisoner.nickName}`;
  prisonerArticle.append(nickname);

  const crimeTitle = document.createElement("h3");
  crimeTitle.setAttribute("class", "crime-title");
  crimeTitle.innerText = `Crime: ${prisoner.crimeType}`;
  prisonerArticle.append(crimeTitle);

  const crimeDetails = document.createElement("p");
  crimeDetails.setAttribute("class", "crime-details");
  crimeDetails.innerText = prisoner.crimeDetails;
  prisonerArticle.append(crimeDetails);

  const blockCell = document.createElement("span");
  blockCell.setAttribute("class", "block-sell");
  blockCell.innerText = `Block Cell: ${prisoner.blockCell}`;
  prisonerArticle.append(blockCell);

  const btnWrapper = document.createElement("div");
  btnWrapper.setAttribute("class", "btn-wrapper");
  prisonerArticle.append(btnWrapper);

  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "delete-btn");
  editBtn.innerText = "EDIT";
  btnWrapper.append(editBtn);

  editBtn.addEventListener("click", function () {
    editPrisonerForm(prisoner);
  });
}

function editPrisonerForm(prisoner) {
  const displayContent = document.querySelector(".display-content");
  displayContent.innerHTML = "";

  const formArticle = document.createElement("article");
  formArticle.setAttribute("class", "form-article");
  displayContent.append(formArticle);

  const form = document.createElement("form");
  form.setAttribute("class", "edit-form");
  formArticle.append(form);

  const h1El = document.createElement("h1");
  h1El.innerText = "Edit Prisoner";
  form.append(h1El);

  const firstNameDiv = document.createElement("div");
  firstNameDiv.setAttribute("class", "first-name-div");
  form.append(firstNameDiv);

  const firstNameLabel = document.createElement("label");
  firstNameLabel.setAttribute("for", "first-name-input");
  firstNameLabel.innerText = "First Name:";
  firstNameDiv.append(firstNameLabel);

  const firstNameInputEl = document.createElement("input");
  firstNameInputEl.setAttribute("class", "first-name-input");
  firstNameInputEl.setAttribute("id", "first-name-input");
  firstNameInputEl.setAttribute("type", "text");
  firstNameInputEl.setAttribute("value", prisoner.firstName);
  firstNameDiv.append(firstNameInputEl);

  const lastNameDiv = document.createElement("div");
  lastNameDiv.setAttribute("class", "last-name-div");
  form.append(lastNameDiv);

  const lastNameLabel = document.createElement("label");
  lastNameLabel.setAttribute("for", "last-name-input");
  lastNameLabel.innerText = "Last Name:";
  lastNameDiv.append(lastNameLabel);

  const lastNameInputEl = document.createElement("input");
  lastNameInputEl.setAttribute("class", "last-name-input");
  lastNameInputEl.setAttribute("id", "last-name-input");
  lastNameInputEl.setAttribute("type", "text");
  lastNameInputEl.setAttribute("value", prisoner.lastName);
  lastNameDiv.append(lastNameInputEl);

  const crimeTypeDiv = document.createElement("div");
  crimeTypeDiv.setAttribute("class", "crime-type-div");
  form.append(crimeTypeDiv);

  const crimeType = document.createElement("label");
  crimeType.setAttribute("for", "street-input");
  crimeType.innerText = "Crime Type:";
  crimeTypeDiv.append(crimeType);

  const crimeTypeInput = document.createElement("input");
  crimeTypeInput.setAttribute("class", "street-input");
  crimeTypeInput.setAttribute("id", "street-input");
  crimeTypeInput.setAttribute("type", "text");
  crimeTypeInput.setAttribute("value", prisoner.crimeType);
  crimeTypeDiv.append(crimeTypeInput);

  const divEl = document.createElement("div");
  divEl.setAttribute("class", "checkbox-section");
  form.append(divEl);

  const checkBoxInputEl = document.createElement("input");
  checkBoxInputEl.setAttribute("class", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("id", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("type", "checkbox");
  checkBoxInputEl.checked = prisoner.goodBehaviour;
  divEl.append(checkBoxInputEl);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", "block-checkbox");
  checkBoxLabel.innerText = "Good Behaviour";
  divEl.append(checkBoxLabel);

  const paroleCheckBoxEl = document.createElement("input");
  paroleCheckBoxEl.setAttribute("class", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("id", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("type", "checkbox");
  paroleCheckBoxEl.checked = prisoner.parole;
  divEl.append(paroleCheckBoxEl);

  const paroleCheckBoxLabel = document.createElement("label");
  paroleCheckBoxLabel.setAttribute("for", "partole-checkbox");
  paroleCheckBoxLabel.innerText = "Parole";
  divEl.append(paroleCheckBoxLabel);
}

function retrieveData() {
  fetch("http://localhost:3000/prisoners")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.prisoners = data;
      return data;
    });
}

function createEventListeners() {
  renderPrisoners();
}

retrieveData();
createEventListeners();
