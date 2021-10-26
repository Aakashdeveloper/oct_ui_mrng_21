var a = true
var b = true

a+b
2
false+true
1
10+true
11
10/false
Infinity

true is equal to 1
false is equal to 0

true+"true"
'truetrue'
true-"true"
NaN

var a = "10"
undefined
var b = "10.11"
undefined
parseFloat(b)
10.11
parseInt(b)
10
parseInt(a)
10

var a = "hiii"
parseInt(a)
NaN

var a = "10hi"
var b = "hi11"
parseInt(a)
10
parseInt(b)
NaN

var a = "10hi24"
parseInt(a)
10

//es6
var a  = "10"
var b= "20.11"
var c = "10hi"

Number(a)
10
Number(b)
20.11
Number(c)
NaN

var a = true
parseInt(a)
NaN
parseFloat(a)
NaN
Number(a)
1
var b = false
Number(b)
0

var a = "truetrue"
Number(a)
NaN
var a = "true"
Number(a)
NaN