// array is collection of homogenious as well as hetrogenious data type
var a = ['hi','biee','hellow' ,'my10', "true"]> array of strings
var b = [3,4,46,45,3,4646] > array of number
var c = [true,false,false,true,true]> array of boolean

var d= ["hii","test",34,35,"kkknj",true,43,false,'ret']

var city = ["Delhi","Mumbai","Helsinki","London"]
typeof(city)
'object'

var b = [3,4,46,45,3,4646]
typeof(b)
'object'

var city = ["Delhi","Mumbai","Helsinki","London"]
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[2]
'Helsinki'
city[city.length-1]
'London'

city.push("Amsterdam")
5
city
(5) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
city.push("Venice")
6
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']

city.pop()
'Venice'
city
(5) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
city.pop(2)
'Amsterdam'
city
(4) ['Delhi', 'Mumbai', 'Helsinki', 'London']
city.pop(2000000000000)
'London'

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.shift()
'Delhi'
city
(5) ['Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.unshift('Boston')
6
city
(6) ['Boston', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']

#Push > add in the end of the array
#Pop > remove the last value of array
#Shift > Remove the first value of the array
#unshift> add in the begining of array


var city = ['Boston', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.slice(1)
(5) ['Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city
(6) ['Boston', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.slice(3,6)
(3) ['London', 'Amsterdam', 'Venice']
city.slice(0,-1)
(5) ['Boston', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
city.slice(-1)
['Venice']
city.slice(-4,-1)
(3) ['Helsinki', 'London', 'Amsterdam']
city.slice(-1,-4)
[]

var city = ['Boston', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.splice(start,deletecount,value)

//delete one valey on indxe 2
city.splice(2,1)
['Helsinki']
city
(5) ['Boston', 'Mumbai', 'London', 'Amsterdam', 'Venice']

// on index number 3 d not remove but value
city.splice(3,0,'Dubai','Pune')
[]
city
(7) ['Boston', 'Mumbai', 'London', 'Dubai', 'Pune', 'Amsterdam', 'Venice']

// on index 4 remove 2 and add 1
city.splice(4,2,'Indore')
['Pune', 'Amsterdam']
city
(6) ['Boston', 'Mumbai', 'London', 'Dubai', 'Indore', 'Venice']



var city =  ['Boston', 'Mumbai', 'London', 'Dubai', 'Indore', 'Venice']
undefined
city.indexOf('London')
2
city.indexOf('Indore')
4
city.indexOf('Delhi')
-1
city.indexOf('Amsterdam')
-1


var city =  ['Boston', 'Mumbai', 'London', 'Dubai', 'Indore', 'Venice']
city.splice(city.indexOf('Dubai'),1)

var a = ['a','b','c',5];
var b = [1,'e',4,'f']
a+b
'a,b,c,51,e,4,f'

a.concat(b)
['a', 'b', 'c', 5, 1, 'e', 4, 'f']


var a = "hiii"
var b = [1,2,3]
undefined
Array.isArray(a)
false
Array.isArray(b)
true

var city =  ['Boston', 'Mumbai', 'London', 'Dubai', 'Indore', 'Venice']
city.sort()
(6) ['Boston', 'Dubai', 'Indore', 'London', 'Mumbai', 'Venice']
city.reverse()
(6) ['Venice', 'Mumbai', 'London', 'Indore', 'Dubai', 'Boston']


var city =  ['Boston',5, 'london', 3, 'Indore', true,"paris",false,9,"Keev",'surat']
city.sort()
[3, 5, 9, 'Boston', 'Indore', 'Keev', false, 'london', 'paris', 'surat', true]

var city =  ['Boston', 'Mumbai', 'London',['Red',['BMW','AUDI','MERC'],'Yellow','Orange','Green'], 'Dubai', 'Indore', 'Venice']
city[2]
'London'
city[3][0]
'Red'
city[3][1]
(3) ['BMW', 'AUDI', 'MERC']
city[3][2]
'Yellow'
city[3][1][0]
'BMW'
city.flat()
(11) ['Boston', 'Mumbai', 'London', 'Red', Array(3), 'Yellow', 'Orange', 'Green', 'Dubai', 'Indore', 'Venice']
city.flat(2)
(13) ['Boston', 'Mumbai', 'London', 'Red', 'BMW', 'AUDI', 'MERC', 'Yellow', 'Orange', 'Green', 'Dubai', 'Indore', 'Venice']