$(document).ready(function () {
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

    renderMovies();

    $('#createButton').on('click', function () {
        $('#movieForm').toggle();
    });

    $('#movieForm').on('submit', function (e) {
        e.preventDefault();
    
        const title = $('#movieTitle').val().trim(); 
        const director = $('#movieDirector').val();
        const genre = $('#movieGenre').val();
        const year = parseInt($('#movieYear').val());
        const index = $('#movieForm').data('index');
    

        const movieExists = movies.some(movie => movie.title.toLowerCase() === title.toLowerCase());
    
        if (index !== undefined) {
            movies[index] = { title, director, genre, year };
            alert("Movie updated successfully!");
        } else {
            if (movieExists) {
                alert("This movie is already in the database!");
            } else {
                movies.push({ title, director, genre, year });
                alert("Movie created successfully!");
            }
        }

        $('#movieForm').trigger('reset').hide().removeData('index');
        renderMovies();
    });

    $(document).on('click', '.deleteButton', function () {
        const index = $(this).data('index');
        movies.splice(index, 1);
        renderMovies();
    });

    $(document).on('click', '.updateButton', function () {
        const index = $(this).data('index');
        const movie = movies[index];

        $('#movieTitle').val(movie.title);
        $('#movieDirector').val(movie.director);
        $('#movieGenre').val(movie.genre);
        $('#movieYear').val(movie.year);

        $('#movieForm').show().data('index', index);
    });
});
