const submitButton = document.querySelector("input[type=submit]");
const rickAndMortyForm = document.getElementById("rickAndMortyForm");
const rickAndMortySubmit = document.querySelector("input[type=text]");


rickAndMortyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitEvent = event.target.querySelector("input[type=submit]");
    const inputValue = submitEvent
    console.log("inputValue", inputValue)
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(resp => resp.json())
    .then(characters => {
        if (characters.results.length > 0) {
            const character = characters.results[0];
            console.log("character", character)

            const rickContainer = document.createElement("div");
            const characterName = document.createElement("h4")
            characterName.innerHTML = characters.results.name
            rickContainer.appendChild(characterName)
            
            console.log(rickContainer)
           

        }
     
     

})
    
    const input = event.target.querySelector("input[type=text]");
    const userInput = input.value;
    console.log(userInput)
})
