var calc = {
    sum: function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(4,7)
11
calc.sub(4,7)
-3

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name},${data.city})`}
}

dbQuery.find('Employee')
'Select * from Employee'
dbQuery.insert('Student',{name:'John',city:'Keev'})
'insert into Student name,city values(John,Keev)'

//you can only update the property
Object.seal(movie)
{name: 'Avengers', rating: 4.5, lang: 'English'}
movie.name
'Avengers'
movie.rating = 4.9
4.9
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}
delete movie.lang
false
movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}

// we cannot update/delete or add any property
Object.freeze(movie)
{name: 'Avengers', rating: 4.9, lang: 'English'}
movie.rating = 4.7
4.7
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}
delete movie.lang
false
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}
movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.9, lang: 'English'}