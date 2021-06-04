let state = [];
state.crimeType = null;
state.gangMember = null;
state.parole = null;
state.goodBehaviour = null;

function displayPrisoner() {}

function renderPrisoners() {
  const prisonerLi = document.querySelector(".prisoners-li");

  prisonerLi.addEventListener("click", function () {
    renderPrisonerList();
  });
}

// RENDER PRISONER LIST
function renderPrisonerList() {
  const displayContent = document.querySelector(".display-content");
  displayContent.setAttribute("class", "display-content");

  displayContent.innerHTML = "";

  for (let i = 0; i < state.prisoners.length; i++) {
    let prisoner = state.prisoners[i];
    let index = [i];

    renderPrisoner(prisoner, index);
  }
  state.gangMember = null;
  state.parole = null;
  state.goodBehaviour = null;
  state.crimeType = null;
}

// RENDER PRISONER
function renderPrisoner(prisoner, index) {
  if (
    state.crimeType !== null &&
    state.crimeType !== prisoner.crimeType.toUpperCase()
  )
    return;
  if (state.gangMember !== null && prisoner.gangMember === false) return;

  if (state.parole !== null && prisoner.parole === false) return;

  if (state.goodBehaviour !== null && prisoner.goodBehaviour === false) return;

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
  // if (index === underfined) console.log("index underfined");
  blockCell.innerText = `Block ${state.block[index].blockId} Cell: ${prisoner.blockCell}`;
  prisonerArticle.append(blockCell);

  const btnWrapper = document.createElement("div");
  btnWrapper.setAttribute("class", "btn-wrapper");
  prisonerArticle.append(btnWrapper);

  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit-btn");
  editBtn.innerText = "E D I T";
  btnWrapper.append(editBtn);

  editBtn.addEventListener("click", function () {
    state.prisoner = prisoner;
    editPrisonerForm(prisoner);
  });
}

// RENDER PRISONER EDIT FORM
function editPrisonerForm(prisoner) {
  const displayContent = document.querySelector(".display-content");
  displayContent.setAttribute(
    "class",
    "display-content display-content-admin-form"
  );
  displayContent.innerHTML = "";

  const formArticle = document.createElement("article");
  formArticle.setAttribute("class", "form-article");
  displayContent.append(formArticle);

  //Form
  const form = document.createElement("form");
  form.setAttribute("class", "edit-form");
  formArticle.append(form);

  //Edit prisoner h1
  const h1El = document.createElement("h1");
  h1El.setAttribute("class", "form-title");
  h1El.innerText = "Edit Prisoner";
  form.append(h1El);

  //First name label + input inside div
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

  //last name label + input inside div
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

  //crime label + input inside div
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

  //checkboxes
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "checkbox-section");
  form.append(divEl);

  //Good Behaviour
  const checkBoxInputEl = document.createElement("input");
  checkBoxInputEl.setAttribute("class", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("id", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("type", "checkbox");
  checkBoxInputEl.checked = prisoner.goodBehaviour;
  divEl.append(checkBoxInputEl);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", "checkbox-label");
  checkBoxLabel.innerText = "Good Behaviour";
  divEl.append(checkBoxLabel);

  //Parole
  const paroleCheckBoxEl = document.createElement("input");
  paroleCheckBoxEl.setAttribute("class", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("id", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("type", "checkbox");
  paroleCheckBoxEl.checked = prisoner.parole;
  divEl.append(paroleCheckBoxEl);

  const paroleCheckBoxLabel = document.createElement("label");
  paroleCheckBoxLabel.setAttribute("for", "checkbox-label");
  paroleCheckBoxLabel.innerText = "Parole";
  divEl.append(paroleCheckBoxLabel);

  //Gang Member
  const gangMemberCheckBox = document.createElement("input");
  gangMemberCheckBox.setAttribute("class", "gang-member-checkbox");
  gangMemberCheckBox.setAttribute("id", "gang-member-checkbox");
  gangMemberCheckBox.setAttribute("type", "checkbox");
  gangMemberCheckBox.checked = prisoner.gangMember;
  divEl.append(gangMemberCheckBox);

  const gangMemberLabel = document.createElement("label");
  gangMemberLabel.setAttribute("for", "checkbox-label");
  gangMemberLabel.innerText = "Gang Member";
  divEl.append(gangMemberLabel);

  //Nick name label + input inside div
  const nickNameDiv = document.createElement("div");
  nickNameDiv.setAttribute("class", "nick-name-div");
  form.append(nickNameDiv);

  const nickName = document.createElement("label");
  nickName.setAttribute("for", "nick-name-input");
  nickName.innerText = "Nick name:";
  nickNameDiv.append(nickName);

  const nickNameInput = document.createElement("input");
  nickNameInput.setAttribute("class", "nick-name-input");
  nickNameInput.setAttribute("id", "nick-name-input");
  nickNameInput.setAttribute("type", "text");
  nickNameInput.setAttribute("value", prisoner.nickName);
  nickNameDiv.append(nickNameInput);

  //crime details input and label
  const crimeDetails = document.createElement("label");
  crimeDetails.setAttribute("for", "crime-details-label");
  crimeDetails.setAttribute("class", "crime-details-label");
  crimeDetails.innerText = "Crime details:";
  form.append(crimeDetails);

  const crimeDetailsInput = document.createElement("textarea");
  crimeDetailsInput.setAttribute("class", "crime-details-input");
  crimeDetailsInput.setAttribute("id", "crime-details-input");
  crimeDetailsInput.setAttribute("type", "text");
  crimeDetailsInput.innerText = prisoner.crimeDetails;
  form.append(crimeDetailsInput);

  //picture
  const pictureLabel = document.createElement("label");
  pictureLabel.setAttribute("for", "picture-input");
  pictureLabel.setAttribute("class", "picture-label");
  pictureLabel.innerText = "Picture:";
  form.append(pictureLabel);

  const pictureInput = document.createElement("input");
  pictureInput.setAttribute("class", "picture-input");
  pictureInput.setAttribute("id", "picture-input");
  pictureInput.setAttribute("type", "text");
  pictureInput.setAttribute("value", prisoner.picture);
  form.append(pictureInput);

  //block A B C D
  const blockDiv = document.createElement("div");
  blockDiv.setAttribute("class", "block-cell-div");
  form.append(blockDiv);

  const blockLabel = document.createElement("label");
  blockLabel.setAttribute("for", "block-cell-label");
  blockLabel.innerText = "Block:";
  blockDiv.append(blockLabel);

  const blockInput = document.createElement("input");
  blockInput.setAttribute("class", "block-cell-input");
  blockInput.setAttribute("id", "block-cell-input");
  blockInput.setAttribute("type", "text");
  let blockIndex = state.block.findIndex(function (index) {
    return prisoner.id === index.prisonerId;
  });
  blockInput.setAttribute("value", state.block[blockIndex].blockId);
  blockDiv.append(blockInput);

  //block Cell input + label inside div
  const blockCellDiv = document.createElement("div");
  blockCellDiv.setAttribute("class", "block-cell-div");
  form.append(blockCellDiv);

  const blockCellLabel = document.createElement("label");
  blockCellLabel.setAttribute("for", "block-cell-label");
  blockCellLabel.innerText = "Block Cell:";
  blockCellDiv.append(blockCellLabel);

  const blockcellInput = document.createElement("input");
  blockcellInput.setAttribute("class", "block-cell-input");
  blockcellInput.setAttribute("id", "block-cell-input");
  blockcellInput.setAttribute("type", "text");
  blockcellInput.setAttribute("value", prisoner.blockCell);
  blockCellDiv.append(blockcellInput);

  //div with submit and delete button
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "button-div");
  form.append(buttonDiv);

  //submit button
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "submit-btn");
  submitBtn.innerText = "S A V E";
  buttonDiv.append(submitBtn);

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    updatePrisoner();
    displayContent.innerHTML = "";
  });

  //Update Array and JSON
  function updatePrisoner() {
    const prisonerToUpdate = state.prisoners.findIndex(function (inmate) {
      return inmate.id === prisoner.id;
    });
    state.prisoners[prisonerToUpdate].firstName = firstNameInputEl.value;
    state.prisoners[prisonerToUpdate].lastName = lastNameInputEl.value;
    state.prisoners[prisonerToUpdate].crimeType = crimeTypeInput.value;
    state.prisoners[prisonerToUpdate].goodBehaviour = checkBoxInputEl.checked;
    state.prisoners[prisonerToUpdate].parole = paroleCheckBoxEl.checked;
    state.prisoners[prisonerToUpdate].gangMember = gangMemberCheckBox.checked;
    state.prisoners[prisonerToUpdate].nickName = nickNameInput.value;
    state.prisoners[prisonerToUpdate].crimeDetails = crimeDetailsInput.value;
    state.prisoners[prisonerToUpdate].picture = pictureInput.value;
    state.prisoners[prisonerToUpdate].blockCell = blockcellInput.value;

    fetch(`http://localhost:3000/prisoners/${prisoner.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: state.prisoners[prisonerToUpdate].firstName,
        lastName: state.prisoners[prisonerToUpdate].lastName,
        crimeType: state.prisoners[prisonerToUpdate].crimeType,
        goodBehaviour: state.prisoners[prisonerToUpdate].goodBehaviour,
        parole: state.prisoners[prisonerToUpdate].parole,
        gangMember: state.prisoners[prisonerToUpdate].gangMember,
        nickName: state.prisoners[prisonerToUpdate].nickName,
        crimeDetails: state.prisoners[prisonerToUpdate].crimeDetails,
        picture: state.prisoners[prisonerToUpdate].picture,
        blockCell: state.prisoners[prisonerToUpdate].blockCell,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        fetch(`http://localhost:3000/block/${prisoner.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blockId: blockInput.value,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            let indexOfblock = state.block.findIndex(function (index) {
              return prisoner.Id === index.prisonerId;
            });
            state.block.splice(indexOfblock, 1);
            state.block.push(data);
          });
      });
  }

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete-btn");
  deleteBtn.innerText = "D I S C H A R G E";
  buttonDiv.append(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    state.prisoners = state.prisoners.filter(function (inmate) {
      return inmate.id !== prisoner.id;
    });

    fetch(`http://localhost:3000/prisoners/${prisoner.id}`, {
      method: "DELETE",
    });
  });
}

function renderAdmission() {
  const displayContent = document.querySelector(".display-content");
  const admissionBtn = document.querySelector(".admissions-li");

  admissionBtn.addEventListener("click", function () {
    renderAdmissionForm();
  });
}

function renderAdmissionForm() {
  const displayContent = document.querySelector(".display-content");
  displayContent.setAttribute(
    "class",
    "display-content display-content-admin-form"
  );
  displayContent.innerHTML = "";

  const formArticle = document.createElement("article");
  formArticle.setAttribute("class", "form-article");
  displayContent.append(formArticle);

  //Form
  const form = document.createElement("form");
  form.setAttribute("class", "edit-form");
  formArticle.append(form);

  //Edit prisoner h1
  const h1El = document.createElement("h1");
  h1El.setAttribute("class", "form-title");
  h1El.innerText = "Admit Prisoner";
  form.append(h1El);

  //First name label + input inside div
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
  firstNameInputEl.setAttribute("value", "");
  firstNameDiv.append(firstNameInputEl);

  //last name label + input inside div
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
  lastNameInputEl.setAttribute("value", "");
  lastNameDiv.append(lastNameInputEl);

  //crime label + input inside div
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
  crimeTypeInput.setAttribute("value", "");
  crimeTypeDiv.append(crimeTypeInput);

  //checkboxes
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "checkbox-section");
  form.append(divEl);

  //Good Behaviour
  const checkBoxInputEl = document.createElement("input");
  checkBoxInputEl.setAttribute("class", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("id", "good-behaviour-checkbox");
  checkBoxInputEl.setAttribute("type", "checkbox");
  checkBoxInputEl.checked = false;
  divEl.append(checkBoxInputEl);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", "checkbox-label");
  checkBoxLabel.innerText = "Good Behaviour";
  divEl.append(checkBoxLabel);

  //Parole
  const paroleCheckBoxEl = document.createElement("input");
  paroleCheckBoxEl.setAttribute("class", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("id", "parole-checkbox");
  paroleCheckBoxEl.setAttribute("type", "checkbox");
  paroleCheckBoxEl.checked = false;
  divEl.append(paroleCheckBoxEl);

  const paroleCheckBoxLabel = document.createElement("label");
  paroleCheckBoxLabel.setAttribute("for", "checkbox-label");
  paroleCheckBoxLabel.innerText = "Parole";
  divEl.append(paroleCheckBoxLabel);

  //Gang Member
  const gangMemberCheckBox = document.createElement("input");
  gangMemberCheckBox.setAttribute("class", "gang-member-checkbox");
  gangMemberCheckBox.setAttribute("id", "gang-member-checkbox");
  gangMemberCheckBox.setAttribute("type", "checkbox");
  gangMemberCheckBox.checked = false;
  divEl.append(gangMemberCheckBox);

  const gangMemberLabel = document.createElement("label");
  gangMemberLabel.setAttribute("for", "checkbox-label");
  gangMemberLabel.innerText = "Gang Member";
  divEl.append(gangMemberLabel);

  //Nick name label + input inside div
  const nickNameDiv = document.createElement("div");
  nickNameDiv.setAttribute("class", "nick-name-div");
  form.append(nickNameDiv);

  const nickName = document.createElement("label");
  nickName.setAttribute("for", "nick-name-input");
  nickName.innerText = "Nick name:";
  nickNameDiv.append(nickName);

  const nickNameInput = document.createElement("input");
  nickNameInput.setAttribute("class", "nick-name-input");
  nickNameInput.setAttribute("id", "nick-name-input");
  nickNameInput.setAttribute("type", "text");
  nickNameInput.setAttribute("value", "");
  nickNameDiv.append(nickNameInput);

  //crime details input and label
  const crimeDetails = document.createElement("label");
  crimeDetails.setAttribute("for", "crime-details-label");
  crimeDetails.setAttribute("class", "crime-details-label");
  crimeDetails.innerText = "Crime details:";
  form.append(crimeDetails);

  const crimeDetailsInput = document.createElement("textarea");
  crimeDetailsInput.setAttribute("class", "crime-details-input");
  crimeDetailsInput.setAttribute("id", "crime-details-input");
  crimeDetailsInput.setAttribute("type", "text");
  form.append(crimeDetailsInput);

  //picture
  const pictureLabel = document.createElement("label");
  pictureLabel.setAttribute("for", "picture-input");
  pictureLabel.setAttribute("class", "picture-label");
  pictureLabel.innerText = "Picture:";
  form.append(pictureLabel);

  const pictureInput = document.createElement("input");
  pictureInput.setAttribute("class", "picture-input");
  pictureInput.setAttribute("id", "picture-input");
  pictureInput.setAttribute("type", "text");
  pictureInput.setAttribute("value", "");
  form.append(pictureInput);

  //block A B C D
  const blockDiv = document.createElement("div");
  blockDiv.setAttribute("class", "block-cell-div");
  form.append(blockDiv);

  const blockLabel = document.createElement("label");
  blockLabel.setAttribute("for", "block-cell-label");
  blockLabel.innerText = "Block:";
  blockDiv.append(blockLabel);

  const blockInput = document.createElement("input");
  blockInput.setAttribute("class", "block-cell-input");
  blockInput.setAttribute("id", "block-cell-input");
  blockInput.setAttribute("type", "text");
  blockInput.setAttribute("value", "");
  blockDiv.append(blockInput);

  //block Cell input + label inside div
  const blockCellDiv = document.createElement("div");
  blockCellDiv.setAttribute("class", "block-cell-div");
  form.append(blockCellDiv);

  const blockCellLabel = document.createElement("label");
  blockCellLabel.setAttribute("for", "block-cell-label");
  blockCellLabel.innerText = "Cell:";
  blockCellDiv.append(blockCellLabel);

  const blockcellInput = document.createElement("input");
  blockcellInput.setAttribute("class", "block-cell-input");
  blockcellInput.setAttribute("id", "block-cell-input");
  blockcellInput.setAttribute("type", "text");
  blockcellInput.setAttribute("value", "");
  blockCellDiv.append(blockcellInput);

  //admission button
  const btnWrapper = document.createElement("div");
  btnWrapper.setAttribute("class", "btn-wrapper");
  formArticle.append(btnWrapper);

  const admissionBtn = document.createElement("button");
  admissionBtn.setAttribute("class", "admission-btn");
  admissionBtn.innerText = "A D M I S S I O N";
  btnWrapper.append(admissionBtn);

  admissionBtn.addEventListener("click", function (event) {
    event.preventDefault();
    displayContent.innerHTML = "";

    fetch(`http://localhost:3000/prisoners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameInputEl.value,
        lastName: lastNameInputEl.value,
        crimeType: crimeTypeInput.value,
        goodBehaviour: checkBoxInputEl.checked,
        parole: paroleCheckBoxEl.checked,
        gangMember: gangMemberCheckBox.checked,
        nickName: nickNameInput.value,
        crimeDetails: crimeDetailsInput.value,
        picture: pictureInput.value,
        blockCell: blockcellInput.value,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        state.prisoners.push(data);

        fetch("http://localhost:3000/block", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blockId: blockInput.value,
            prisonerId: data.id,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            state.block.push(data);
          });
      });
  });
}

function renderGangMembers() {
  let contentSection = document.querySelector(".display-content");
  contentSection.innerHTML = "";

  const gangMember = document.querySelector(".gang-members-li");

  gangMember.addEventListener("click", function () {
    state.gangMember = true;
    renderPrisonerList();
  });
}

function renderEligibleForParole() {
  let contentSection = document.querySelector(".display-content");
  contentSection.innerHTML = "";

  const parole = document.querySelector(".paroles-li");

  parole.addEventListener("click", function () {
    state.parole = true;
    renderPrisonerList();
  });
}

function renderGoodBehaviourList() {
  let contentSection = document.querySelector(".display-content");
  contentSection.innerHTML = "";

  const goodBehaviour = document.querySelector(".good-behaviour-li");

  goodBehaviour.addEventListener("click", function () {
    state.goodBehaviour = true;
    renderPrisonerList();
  });
}

// RETREIVE DATA FROM LOCAL JSON SERVER
function retrieveData() {
  fetch("http://localhost:3000/prisoners")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.prisoners = data;
      return data;
    });

  fetch("http://localhost:3000/block")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.block = data;
      return data;
    });
}

//CREATE EVENT LISTENERS FOR MAIN MENU BUTTONS
function createEventListeners() {
  renderPrisoners();
  renderAdmission();
  renderGangMembers();
  renderEligibleForParole();
  renderGoodBehaviourList();
}

/////////////////////////////////////////////////////////////////////
// MAIN PROGRAM STARTS HERE

retrieveData();
createEventListeners();
