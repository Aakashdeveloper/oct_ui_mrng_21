if(condition){
    // do something
}else{
     // do something
}

var a = 9882
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 9882 is even

var a = 9881
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 9881 is odd

var name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name== "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
Hi Bhumika you are super admin


var name = "Aakash"
var role = "User"

if(role == "Admin"){
    if(name == "Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name == "John"){
        console.log(`Hi ${name} you are super ${role}`)
    }else{
        console.log(`Hi ${name} you not ${role}`)
    }
}else if(role == "User"){
    if(name == "Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name == "John"){
        console.log(`Hi ${name} you are super ${role}`)
    }else{
        console.log(`Hi ${name} you not ${role}`)
    }
}else{
    console.log(`Hi ${name} you not unknown`)
}

Hi Aakash you are User


var name = "Tina"
if(name == "Tina" || role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}

var name = "Tina"
if(name == "Tina" && role == "Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}

var a = 1
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}

"Hiii"

var a = 0
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}
"Biee"

var a = -1
if(a){
    console.log(`Hiii`)
}else{
    console.log(`Biee`)
}

"Hiii"

//// Ternary Operators
(Single Line if else)

var a = 10
a>10?"Hiii":"Biee"
'Biee'

var a = 10
a=10?"Hiii":"Biee"
'Hiii'


var a = 10
a>10?a+1:a-1
9

/// you should not use
var a = 10
a>10?a+1:a-1?"Hiii":"Bieee"
'Hiii'
var a = 10
a=10?a+1:a-1?"Hiii":"Bieee"
11