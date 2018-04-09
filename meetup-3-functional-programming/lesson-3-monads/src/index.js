const { newReleases, movieLists } = require('./data')

//console.log(newReleases)

// create new lists from newReleases
console.log(newReleases.map(movie => movie.title))
console.log(newReleases.map(movie => ({ title: movie.title })))

// filter 
// get movies with ratings > 4.0
console.log(newReleases.filter(movie => movie.rating > 4.0))