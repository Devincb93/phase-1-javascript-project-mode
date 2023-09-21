const submitButton = document.querySelector("input[type=submit]");
const rickAndMortyForm = document.getElementById("rickAndMortyForm");
const rickAndMortySubmit = document.querySelector("input[type=text]");


rickAndMortyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitEvent = event.target.querySelector("input[type=submit]");
    const inputValue = submitEvent
    
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(resp => resp.json())
    .then(characters => {
        if (characters.results.length > 0) {
            const character = characters.results[0];
            console.log("character", character)
        }
     
     

})
    
    const input = event.target.querySelector("input[type=text]");
    const userInput = input.value;
    console.log(userInput)
})
