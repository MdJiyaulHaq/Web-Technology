
const movies = [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "The Dark Knight", year: 2008, rating: 9.0 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Fight Club", year: 1999, rating: 8.8 },
    { title: "Pulp Fiction", year: 1994, rating: 8.9 },
    { title: "Forrest Gump", year: 1994, rating: 8.8 },
    { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { title: "The Godfather", year: 1972, rating: 9.2 },
    { title: "Schindler's List", year: 1993, rating: 8.9 },
];

// 1. Filter movies released after 2000
const moviesAfter2000 = movies.filter(movie => movie.year > 2000).filter(movie => movie.rating >= 8.5).sort((a, b) => b.rating - a.rating).map(movie => movie.title);

console.log(moviesAfter2000);