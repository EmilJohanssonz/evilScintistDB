import EvilScientist from "./alias";
const nameInput = document.getElementById("evilScientistName") as HTMLInputElement;
const ageInput = document.getElementById("evilScientistAge") as HTMLInputElement;
const henchmenInput = document.getElementById("evilScientistHenchmen") as HTMLInputElement;
const descriptionInput = document.getElementById("evilScientistDescription") as HTMLInputElement;
const listSection = document.getElementById("list-names") as HTMLDivElement;
const detailsSection = document.getElementById("details") as HTMLElement;
const addButton = document.getElementById("addScientist") as HTMLButtonElement;

const scientists: EvilScientist[] = [];

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value, 10);
  const henchmen = parseInt(henchmenInput.value, 10);
  const description = descriptionInput.value.trim();

  const scientistObj: EvilScientist = { name, age, henchmen, description };
  scientists.push(scientistObj);

  const nameElement = document.createElement('div');
  nameElement.textContent = scientistObj.name;
  nameElement.classList.add('name');
  listSection.appendChild(nameElement);

  nameElement.addEventListener('click', () => {
    showScientistDetails(scientistObj);
  });

  nameInput.value = '';
  ageInput.value = '';
  henchmenInput.value = '';
  descriptionInput.value = '';
});

function showScientistDetails(scientist: EvilScientist) {
  detailsSection.innerHTML = `
    <p>Name: ${scientist.name}</p>
    <p>Age: ${scientist.age}</p>
    <p>Henchmen: ${scientist.henchmen}</p>
    <p>Description: ${scientist.description}</p>
  `;
}
