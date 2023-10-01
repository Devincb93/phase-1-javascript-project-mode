const submitButton = document.querySelector("input[type=submit]");
const rickAndMortyForm = document.getElementById("rickAndMortyForm");
const rickAndMortyInput = document.querySelector("input[type=text]");
const clearButton = document.getElementById("clear");
const rickContainerShort = document.getElementById("rick-container")

rickAndMortyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const inputValue = rickAndMortyInput.value;
    

    if (inputValue === "") {
        alert("Please enter a character name to continue!")
        return;
    }
    while (rickContainerShort.firstChild) {
        rickContainerShort.removeChild(rickContainerShort.firstChild);
    }
    console.log("inputValue", inputValue)
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
        const characters = data.results;
            if (characters.length >0) {
               
                    console.log(rickContainerShort)
                characters.forEach(character => {
                    const characterContainer = document.createElement("div")
                    
                    const characterName = document.createElement("h4");
                    characterName.textContent = character.name;

                    const characterStatus = document.createElement("li")
                    characterStatus.textContent = character.status;

                    const characterSpecies = document.createElement("li")
                    characterSpecies.textContent = character.species;

                    const characterGender = document.createElement("li")
                    characterGender.textContent = character.gender;

                    const characterImage = document.createElement("img")
                    characterImage.src = character.image;
                    characterImage.className = "character-images";

                    const characterClear = document.createElement("button")
                    characterClear.textContent = "X";
                    characterClear.addEventListener("click",() => {
                        rickContainerShort.removeChild(characterContainer)
                    })
                    

                    
                    characterContainer.appendChild(characterName);
                    characterContainer.appendChild(characterStatus);
                    characterContainer.appendChild(characterSpecies);
                    characterContainer.appendChild(characterGender);
                    characterContainer.appendChild(characterImage);
                    characterContainer.appendChild(characterClear);

                    rickContainerShort.appendChild(characterContainer);
                    

                    
                    
                });
            } else {
                alert("No characters found. Try again.")

            }
});     
});
clearButton.addEventListener("click", () => {
    rickContainerShort.innerHTML = ""
    // if (rickContainerShort.firstChild) {
    //     rickContainerShort.clear(rickContainerShort.); 
    // }
});
