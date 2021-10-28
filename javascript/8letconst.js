var > we can redeclare and reassign 
let > we cannot redeclare and but can reassign
const > we cannot redeclare and nor reassign

var a = 10;
var a >>>>> declare
a = 10 >>>> assignment

var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 20
20
> a = 30
30
> a
30
> let b = 10
undefined
> b
10
> let b = 20
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 20
20

const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.