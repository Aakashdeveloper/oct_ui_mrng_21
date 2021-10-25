//es5 > Ecma Script 5
//es6 > Ecma Script 6

DataTypes
> String > "hiii" 'hey' '20' 'vd34' "true" `hi` `11`
> Number > 10 12.11 32535345 45435454.44353
> Boolean > true false

// es5
var a = "hiii"
var b = 10
var c = true

typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.11
undefined
typeof(e)
'number'
var f = "true"
undefined
typeof(f)
'string'

var a = 20
var b = 10
undefined
a+b (addition)
30
a-b
10
a/b
2
a*b
200
a%b
0
4%2
0
4%3
1
5%3
2

2%4 > 2
3%4 > 3
4%4 > 0

var a = "Hii"
var b = "JavaScript"
a+b (concat)
'HiiJavaScript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN
a%b
NaN

var a = 10
var b = "Hi"
a+b
'10Hi'

string + string = string
string + number = string
number + string = string
number + number = number

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'

10+"20"+30-1
"102030"-1
102029

10+20+"30"-1
"3030"-1
3029

"10"+20+30-1
"102030"-1
102029

"hii"-1
NaN
"10"-1
9
"10"-"1a"
NaN
"10"-"1"
9
"10"+"1"
'101'
"10"*2
20
10-"2"
8

if both side pure number weather in from of string as well
it will work except in case of + (+ is still concat)