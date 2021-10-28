var city = "lONdOn";
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'

var city = "lONdOn";
undefined
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
city[0]
'l'
city[1]
'O'
city[city.length-1]
'n'


var name = "  Nikita  "
name.length
10
name[name.length-1]
' '
name.trim()
'Nikita'
name.trim().length
6

var name = "  Nikita . "
undefined
name.trim()
'Nikita .'
var name1 = "john"
undefined
var name2 = "John"
undefined
name1 == name2
false
name1.toLowerCase() == name2.toLowerCase()
true

var city = "amsTErdAm"
city.charAt()
'a'
city.charAt(2)
's'
city.charAt(5)
'r'
city.charAt(100)
''
city.charAt(9)
''
city.charAt(8)
'm'


var city = "amsTErdAm"

city.slice(1)
'msTErdAm'
city.slice(2)
'sTErdAm'
city.slice(2,5)
'sTE'
city.slice(3,7)
'TErd'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,-1)
'amsTErdA'
city.slice(0,-2)
'amsTErd'
city.slice(-2,-5)
''
city.slice(-5,-2)
'Erd'
city.slice(2,-2)
'sTErd'
city.slice(-2,2)
''

var city = "amsTErdAm"
city.charAt(0)
'a'
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'msTErdAm'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRIs"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "i am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'i am learning JS'
var a = "JavaScript i am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS i am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS i am learning JS'
var name = "  Nikita . "
undefined
name.replace(/ /g,'')
'Nikita.'
name.replace(/ /g,'-')
'--Nikita-.-'
var name = "John Doe"
undefined
name.replace(' ','-')
'John-Doe'

var url = "https://github.com/Aakashdeveloper/oct_react_mrng_21"
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'oct_react_mrng_21']
var url = "https://github.com/Aakashdeveloper/oct_react_mrng_21"
url.split('/')[4]
'oct_react_mrng_21'

var a = url.split('/')
a[a.length-1]
'oct_react_mrng_21'


var a = "JavaScript i am learning JavaScript"
a.split(' ')
(5) ['JavaScript', 'i', 'am', 'learning', 'JavaScript']

var a = "javascript"
a.split('')
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

var out = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
out.toString()
'j,a,v,a,s,c,r,i,p,t'
out.toString().replace(/,/g,'')
'javascript'

var a = 10
a.toString()
'10'
""+a
'10'
