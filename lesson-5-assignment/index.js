const romComs = require('./romComs');

const weddingSinger = {
    title : "The Wedding Singer", 
    description : "Robbie, a singer, and Julia, a waitress, are both engaged, but to the wrong people. Fortune intervenes to help them discover each other."
}

// Given an array of movies with title and storyline, write a function getMovies() that iterates 
// through the movies list but the loop is enclosed within a setTimeout of 1 second (1000 ms)
function getMovies(movies) {
    setTimeout(() => {
        try {
            movies.forEach(movie => {
                console.log(`Title: ${movie.title}, Description: ${movie.description}`);
            });
            return movies;
        } catch(err) {
            console.log(err.message);
        }
    }, 1000);
}


// Add another function called createMovies(). This function fetches an argument movie and pushes it to the array list.
// But the function createMovies() returns a promise and contains a timeout of 2 secs (2000 ms).
function createMovies(movie, movies) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(addMovie(movie, movies))
        }, 2000);
    })
    
}

function addMovie(movie, movies) {
    try {
        movies.push(movie);
        return movies;
    } catch(err) {
        console.log(err.message);
    }
    
}

// Write an init() function that calls createMovies() and getMovies() but 
// getMovies() will only run after createMovies() is done.
async function init(movie, movies) {
    await createMovies(movie, movies);
    getMovies(movies);
}

init(weddingSinger, romComs);

// Also include error handling if possible.