var moviename = "Avengers"
var movieRating = 4.5
var movielang = "English"

var moviename1 = "Jab We Met"
var movieRating1 = 4.8
var movielang1 = "Hindi"

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}
typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.lang
'English'
movie.rating = 4.8
4.8
movie
{name: 'Avengers', rating: 4.8, lang: 'English'}
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.8, lang: 'English', ind: 'Hollywood'}
delete movie.lang
true
movie
{name: 'Avengers', rating: 4.8, ind: 'Hollywood'}

movie['rating']
4.5
movie['rating'] = 4.7
4.7
movie['ind'] = "Hollywood"
'Hollywood'
delete movie['lang']
true
movie
{name: 'Avengers', rating: 4.7, ind: 'Hollywood'}

// JSON
// JavaScript Object notation
var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English',
        year:2005
    },
    {
        name:'Jab We Met',
        rating:4.6,
        lang:'Hindi'
    },
    {
        name:'Forest Gump',
        rating:3.7,
        lang:'English'
    }
]

movies[1].name
'Jab We Met'
movies[0].lang
'English'

var user = {
    name:'Ankit',
    email:'a@a.com',
    addresses:[
        {"home":"homeaddress"},
        {"office":"officeaddress"}
    ]
}

user.email
'a@a.com'
user.addresses[0].home
'homeaddress'

for(mymovies of movies){
    console.log(mymovies.name)
}
Avengers
Jab We Met
Forest Gump

movies.map((data) => {return data.name})
['Avengers', 'Jab We Met', 'Forest Gump']

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movie){
    console.log(key)
}
name
rating
lang

for(key in movie){
    console.log(movie[key])
}
Avengers
4.5
English