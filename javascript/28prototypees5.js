function human(name,city){
    this.name = name;
    this.city = city
}
function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10;
}

var john = new human('John','Delhi')

var pepper = new robot('Pepper')
undefined
pepper
robot {name: 'Pepper', legs: 2, age: 10}

human.prototype = new robot()
human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}
var amit = new human('Amit','Paris')
undefined
amit
human {name: 'Amit', city: 'Paris'}
amit.legs
2
amit.age
10