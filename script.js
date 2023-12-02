const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const characterList = document.getElementById("characterList");

searchButton.addEventListener("click", function () {
  const searchQuery = searchInput.value;
  searchCharacters(searchQuery);
});

function searchCharacters(query) {
  characterList.innerHTML = "";

  fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        showError("No characters found.");
      } else {
        data.results.forEach((character) => {
          displayCharacter(character);
        });
      }
    })
    .catch((error) => {
      showError("Error al buscar personaje. Por favor vuelva a intentar.");
    });
}

f;

function displayCharacter(character) {
  const characterDiv = document.createElement("div");
  characterDiv.classList.add("character");

  const characterImage = document.createElement("img");
  characterImage.classList.add("character-image");
  characterImage.src = character.image;
  characterDiv.appendChild(characterImage);

  const characterDetails = document.createElement("div");
  characterDetails.classList.add("character-details");

  const characterName = document.createElement("h2");
  characterName.classList.add("character-name");
  characterName.textContent = character.name;
  characterDetails.appendChild(characterName);

  const characterSpecies = document.createElement("p");
  characterSpecies.textContent = `Especie: ${character.species}`;
  characterDetails.appendChild(characterSpecies);

  const characterStatus = document.createElement("p");
  characterStatus.textContent = `Estado: ${character.status}`;
  characterDetails.appendChild(characterStatus);

  const characterButton = document.createElement("button");
  characterButton.textContent = "Mostrar detalles";
  characterButton.addEventListener("click", function () {
    showCharacterDetails(character);
  });
  characterDetails.appendChild(characterButton);

  characterDiv.appendChild(characterDetails);
  characterList.appendChild(characterDiv);
}

function showCharacterDetails(character) {
  const characterDetailsDiv = document.createElement("div");
  characterDetailsDiv.classList.add("character-details");

  const characterName = document.createElement("h2");
  characterName.classList.add("character-name");
  characterName.textContent = character.name;
  characterDetailsDiv.appendChild(characterName);

  const characterImage = document.createElement("img");
  characterImage.classList.add("character-image");
  characterImage.src = character.image;
  characterDetailsDiv.appendChild(characterImage);

  const characterSpecies = document.createElement("p");
  characterSpecies.textContent = `Especie: ${character.species}`;
  characterDetailsDiv.appendChild(characterSpecies);

  const characterStatus = document.createElement("p");
  characterStatus.textContent = `Estado: ${character.status}`;
  characterDetailsDiv.appendChild(characterStatus);


  characterList.innerHTML = "";
  characterList.appendChild(characterDetailsDiv);
}
