var name = "Avengers"
var rating = 4.5
var type = "Action"
var ind = "Hollywood"

//es5
var out = "An "+name+" is an "+type+" movie with the rating of "+rating+" and from ind "+ind+"."
'An Avengers is an Action movie with the rating of 4.5 and from ind Hollywood.'

//es6
var out = `An ${name} is an ${type} movie with the rating of ${rating} and from ind ${ind}.`
'An Avengers is an Action movie with the rating of 4.5 and from ind Hollywood.'