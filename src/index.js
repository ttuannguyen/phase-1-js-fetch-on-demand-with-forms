//Add Event Listeners to Capture Form Data and Override the Form's Behavior
const init = () => {
    const inputForm = document.querySelector('form'); //add an event listener to the form element
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault(); //method to override the form's behavior and prevent refreshing 
        const input = document.querySelector('input#searchByID');
        
        //console.log(input.value);

        //Fetch Data Based on User Input
        fetch(`http://localhost:3000/movies/${input.value}`)//to modify the URL we pass to our fetch function based on the input typed into the HTML form
        .then(response => response.json())
        // .then(data => {
        //     console.log(data); // LOG: (3) [{…}, {…}, {…}]
        // });
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            //change the contents of our title and summary elements based on the retrieved data
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    });
}

document.addEventListener('DOMContentLoaded', init);