const submitButton = document.querySelector("input[type=submit]");
const rickAndMortyForm = document.getElementById("rickAndMortyForm");
const rickAndMortyInput = document.querySelector("input[type=text]");
const clearButtonAssign = document.getElementById("clear");

rickAndMortyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const inputEvent = rickAndMortyInput.value;
    const inputValue = inputEvent

    if (inputValue === "") {
        alert("Please enter a character name to continue!")
        return;
    }
    console.log("inputValue", inputValue)
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(characters => {
        if (characters.results.length > 0) {
            const character = characters.results[0];
            console.log("character", character)
            // Variables for each element in html that needs to be
            // for the information to be displayed on the screen.
            const rickContainer = document.createElement("div");
            const characterName = document.createElement("h4");
            const characterStatus = document.createElement("li");
            const characterSpecies = document.createElement("li");
            const characterImage = document.createElement("img");
            const characterGender = document.createElement("li");
            const characterLocation = document.createElement("li");
            // Assigns each variables inner elements to the results of the api
            characterLocation.innerHTML = character.location
            characterGender.innerHTML = character.gender
            characterImage.src = character.image
            characterSpecies.innerHTML = character.species
            characterStatus.innerHTML = character.status
            characterName.innerHTML = character.name
            // Appends the results to the container that holds the information.
            rickContainer.appendChild(characterName)
            rickContainer.appendChild(characterStatus)
            rickContainer.appendChild(characterSpecies)
            rickContainer.appendChild(characterGender)
            rickContainer.appendChild(characterLocation)
            rickContainer.appendChild(characterImage)
            console.log(rickContainer)
           
        document.body.appendChild(rickContainer)
        }
    
     
     

})
    
    const input = event.target.querySelector("input[type=text]");
    const userInput = input.value;
    console.log(userInput)
})
