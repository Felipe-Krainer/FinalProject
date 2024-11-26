Movie Manager Application
A CRUD application built with HTML, CSS, JavaScript, and jQuery that allows users to manage a collection of movies. This project demonstrates key web development concepts learned during the semester, including dynamic DOM manipulation, object handling, conditional logic, functions, and iteration.

Features---------------------------------------

Create
Users can add a new movie to the collection using the provided form.
The application checks if a movie with the same title already exists (case-insensitive). If it does, an alert is displayed.
A success message is shown upon successfully adding a new movie.

Read
The list of movies is dynamically displayed on the webpage.
Each movie displays the title, director, genre, and year.
Users can view detailed information for each movie directly on the main list.

Update
Users can edit a movie's details by clicking the Update button.
The form is pre-filled with the selected movie's data for easy modification.
Upon saving, the updated movie is reflected in the list, and a success message is shown.

Delete
Users can delete a movie by clicking the Delete button.
The movie is removed from the list, and a success message is displayed.

Project Structure
project/
    index.html       # Main HTML file
    style.css        # Stylesheet for the project
    script.js        # Main JavaScript file for logic
    movies.js        # Contains the array of movie objects

How It Works---------------------------------------
1. Array of Objects
The movie data is stored in an external movies.js file:
```javascript
const movies = [
    { title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", year: 2010 },
    { title: "The Matrix", director: "The Wachowskis", genre: "Action", year: 1999 },
    { title: "Parasite", director: "Bong Joon-ho", genre: "Thriller", year: 2019 }
];
```
// Function to return the array
```javascript
function getMovies() {
    return movies;
}
```

2. Create
The application allows users to add a new movie using the form. The app checks if a movie with the same title already exists. 
```javascript
$('#movieForm').on('submit', function (e) {
    e.preventDefault();
    const title = $('#movieTitle').val().trim();
    const director = $('#movieDirector').val();
    const genre = $('#movieGenre').val();
    const year = parseInt($('#movieYear').val());
    const movieExists = movies.some(movie => movie.title.toLowerCase() === title.toLowerCase());
    if (movieExists) {
        alert("This movie is already in the database!");
    } else {
        movies.push({ title, director, genre, year });
        alert("Movie created successfully!");
    }
    renderMovies();
});
```
3. Read
The movie list is dynamically generated and displayed using jQuery:
```javascript
function renderMovies() {
    const movieList = getMovies();
    $('#displayArea').empty();
    movieList.forEach((movie, index) => {
        $('#displayArea').append(`
            <div>
                <h3>${movie.title}</h3>
                <p>Director: ${movie.director}</p>
                <p>Genre: ${movie.genre}</p>
                <p>Year: ${movie.year}</p>
                <button class="deleteButton" data-index="${index}">Delete</button>
                <button class="updateButton" data-index="${index}">Update</button>
            </div>
        `);
    });
}
```
4. Update
Users can update a movie's details. Clicking the Update button fills the form with the selected movie's data:
```javascript
$(document).on('click', '.updateButton', function () {
    const index = $(this).data('index');
    const movie = movies[index];
    $('#movieTitle').val(movie.title);
    $('#movieDirector').val(movie.director);
    $('#movieGenre').val(movie.genre);
    $('#movieYear').val(movie.year);
    $('#movieForm').show().data('index', index);
});
```
5. Delete
Users can delete a movie by clicking the Delete button:
```javascript
$(document).on('click', '.deleteButton', function () {
    const index = $(this).data('index');
    movies.splice(index, 1);
    alert("Movie deleted successfully!");
    renderMovies();
});
```
How to Run the Application---------------------------------------
Clone or download the repository to your local machine.
Open the index.html file in any modern web browser.
Interact with the application to test the CRUD operations.

Live Demo---------------------------------------
[View the application on GitHub Pages](https://felipe-krainer.github.io/FinalProject/)

Technologies Used---------------------------------------

HTML for structure.
CSS for styling.
JavaScript for logic and data handling.
jQuery for DOM manipulation and event handling.

Project Highlights---------------------------------------

Utilizes modular code by separating data (movies.js) and logic (script.js).
Checks for duplicate entries to ensure data integrity.
Dynamic and user-friendly interface.

Future Improvements---------------------------------------
Add search functionality to filter movies by title or genre.
Store data in localStorage or integrate with a database for persistence.
Add movie posters and ratings for richer user experience.

Author---------------------------------------
Developed by Felipe de Toledo Krainer for the Web Design CIT 21500 Final Project.
