// MAIN PROGRAM BEGINS AT index.js
// THIS PROVIDES FUNCTION FOR THE CRIMES MENU BUTTON
// Author Sydney

////////////////////////////////////////////////////////////////
// ALL FUNCTIONS ARE DECLARED HERE

// ADD AN EVENT LISTENER FOR THE CRIMES BUTTON
function createButtonListener() {
  let crimesButton = document.querySelector(".crimes-li");
  crimesButton.addEventListener("click", function () {
    renderCrimesButtonList();
  });
}

// RENDER BUTTON LIST OF CRIMES
function renderCrimesButtonList() {
  let menuSection = document.querySelector(".display-menu");
  let contentSection = document.querySelector(".display-content");
  contentSection.setAttribute("class","display-content display-content-admin-form");
  contentSection.innerHTML = "";
  state.crimeType = null;

  // CREATE A UNORDERED LIST ELEMENT
  const crimesUl = document.createElement("ul");
  crimesUl.setAttribute("class", "crimes-list");
  contentSection.append(crimesUl);

  // GET A LIST OF PRISONER CRIMES
  let crimeTypes = [];
  for (const prisoner of state.prisoners)
    crimeTypes.push(prisoner.crimeType.toUpperCase());
  crimeTypes = new Set(crimeTypes.sort());

  // CREATE A BUTTON FOR EACH CRIME-TYPE
  for (const crime of crimeTypes) renderCrimeButton(crime);
}

function renderCrimeButton(crime) {
  let crimesUl = document.querySelector(".crimes-list");

  // CREATE A 'CRIME' LIST ITEM BUTTON
  const crimesLi = document.createElement("li");
  crimesLi.setAttribute("class", "crimes-list-item");
  crimesLi.innerText = crime;
  crimesUl.append(crimesLi);

  // CREATE AN EVENT LISTENER TO DISPLAY PRISONERS
  crimesLi.addEventListener("click", function () {
    state.crimeType = crime;
    renderPrisonerList();
  });
}

////////////////////////////////////////////////////////////////
// MAIN PROGRAM STARTS IN index.js
// CRIME BUTTON FUNCTIONS BEGIN HERE

createButtonListener();
