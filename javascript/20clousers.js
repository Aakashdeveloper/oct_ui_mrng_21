// local scope
// global scope
// enclose something

/*
var a = 10;
function add(){
    var b = 20;
    return a+b
}

console.log("add>>>", add())
console.log("a>>>", a)
console.log("b>>>", b)

add>>> 30
a>>> 10
/Users/aakash/Desktop/api/oct_21/oct_ui_mrng/javascript/20clousers.js:13
console.log("b>>>", b)
ReferenceError: b is not defined
*/

/*
var a = 10;
var b;
function add(){
    b = 20;
    return a+b
}

console.log("add>>>", add())
console.log("a>>>", a)
console.log("b>>>", b)
*/
var a =10
for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>", a)
console.log("b>>>", b)



var employeeId = 'abc123'
function foo(){
    employeeId = "123bcd"
    return;
}

foo()
console.log(employeeId)

////////////

var employeeId = 'abc123';

function foo() {
    employeeId = '123bcd';
	return;
	function abc() {}
}
foo();
console.log(employeeId);
Answer: 3) '123bcd'


var employeeId = 'abc123';
function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}

foo();
Answer: 2) 'function'


var employeeId = 'abc123';
function foo() {
    abc();
    return;
	function abc() {
		console.log(typeof employeeId);
	}
}
"string"


var employeeId = 'abc123';

function foo() {
    employeeId = 10
    abc();
    return;
	function abc() {
		console.log(typeof employeeId);
	}
}

number



////////Currying function
function mul(a,b,c){
    return a*b*c
}
mul(2,3,4)
24

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(2)(3)(4)
24