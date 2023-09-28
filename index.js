const submitButton = document.querySelector("input[type=submit]");
const rickAndMortyForm = document.getElementById("rickAndMortyForm");
const rickAndMortyInput = document.querySelector("input[type=text]");
const clearButton = document.getElementById("clear");
const rickContainerShort = document.getElementById("rick-container")
let rickContainer = null;
rickAndMortyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const inputValue = rickAndMortyInput.value;
    

    if (inputValue === "") {
        alert("Please enter a character name to continue!")
        return;
    }
    console.log("inputValue", inputValue)
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
        const characters = data.results;
            if (characters.length >0) {
                rickContainerShort.remove(.3);
                    console.log(rickContainerShort)
                characters.forEach(character => {
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

                    const characterContainer = document.createElement("div");
                    characterContainer.className = "rick-container";

                    rickContainerShort.appendChild(characterName);
                    rickContainerShort.appendChild(characterStatus);
                    rickContainerShort.appendChild(characterSpecies);
                    rickContainerShort.appendChild(characterGender);
                    rickContainerShort.appendChild(characterImage);
                    rickContainerShort.appendChild(characterContainer);

                });
            } else {
                alert("No characters found. Try again.")
            }
        
//         if (characters.results.length > 0) {
//             const character = characters.results[0];
//             console.log("character", character)
           
           
//              // Variables for each element in html that needs to be
//             // for the information to be displayed on the screen.
//             const rickContainer = document.createElement("div");
//             rickContainer.id = "rickContainer";
//             const characterName = document.createElement("h4");
//             const characterStatus = document.createElement("li");
//             const characterSpecies = document.createElement("li");
//             const characterImage = document.createElement("img");
//             const characterGender = document.createElement("li");
//             const characterLocation = document.createElement("li");
           
//             // Assigns each variables inner elements to the results of the api
//             characterLocation.innerHTML = character.location
//             characterGender.innerHTML = character.gender
//             characterImage.src = character.image
//             characterSpecies.innerHTML = character.species
//             characterStatus.innerHTML = character.status
//             characterName.innerHTML = character.name
//             // Appends the results to the container that holds the information.
//             rickContainer.appendChild(characterName)
//             rickContainer.appendChild(characterStatus)
//             rickContainer.appendChild(characterSpecies)
//             rickContainer.appendChild(characterGender)
//             rickContainer.appendChild(characterLocation)
//             rickContainer.appendChild(characterImage)
            
//             console.log(rickContainer)
           
//         document.body.appendChild(rickContainer)
//         }
});     
});
clearButton.addEventListener("click", () => {
    if (rickContainer) {
        rickContainer.remove();
        inputValue.value = ""
        document.grabElementbyId("rick-container").remove(); 
    }
});
