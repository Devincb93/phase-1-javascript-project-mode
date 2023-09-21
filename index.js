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
     
     

})
    
    const input = event.target.querySelector("input[type=text]");
    const userInput = input.value;
    console.log(userInput)
})
