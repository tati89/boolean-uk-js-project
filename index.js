let state = [];

function displayPrisoner() {}

function renderPrisoners() {
  const displayContent = document.querySelector(".display-content");
  displayContent.innerHTML = "";

  const prisonerLi = document.querySelector(".prisoners-li");

  prisonerLi.addEventListener("click", function () {
    renderPrisonerList();
  });
}

function renderPrisonerList() {
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
  prisonerTitle.innerText = prisoner.firstName + " " + prisoner.lastName;
  prisonerArticle.append(prisonerTitle);
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
