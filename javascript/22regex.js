regular expression
^$

// if pattern does not match it will return null
var a = "hi"
a.match("^([a-z])$")
null

//exactly match one letter word in small
var a = "h"
a.match("^([a-z])$")
 ['h', 'h', index: 0, input: 'h', groups: undefined]

//exactly match two letter word in small
var a = "hi"
a.match("^([a-z]{2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefin

//exactly match letter between range  in small
var a = "hiuh"
a.match("^([a-z]{2,5})$")


//match any length between range  in small
var a = "hiuh"
a.match("^([a-z]+)$")

var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]
var a = "iiH"
a.match("^([A-Za-z]+)$")
(2) ['iiH', 'iiH', index: 0, input: 'iiH', groups: undefined]

var a = "Hii"
a.match("^([A-Ja-z0-9]+)$")

var num = 9876543210
num.match("^[0-9]{10}$")
Uncaught TypeError: num.match is not a function

num.toString().match("^[0-9]{10}$")
['9876543210', index: 0, input: '9876543210', groups: undefined]

var str = "this hat is hot"
str.match(/h.t/g)
(2) ['hat', 'hot']

var str = "this hat is hot haat"
str.match(/h.t/g)
(2) ['hat', 'hot']
str.match(/h..t/g)
['haat']

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a.co"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.co', 'a', 'a', 'co', index: 0, input: 'a@a.co', groups: undefined]