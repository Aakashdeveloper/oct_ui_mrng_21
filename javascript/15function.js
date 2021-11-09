function
method
Arrow Function
IffI
Generator
////////////////////////////////////////////////////////////////
var a = 10;
var b = 20;
a+b
30

////////////////////////////////////////////////////////////////
keyword nameoffunction(parameters){
    return
}

function add(a,b){
    return a+b
}

add(1,2) > 3
a == 1
b == 2
a+b = 3
add(22,10) > 32


function isEven(UserInput){
    var out;
    if(UserInput%2==0){
        out = `Number ${UserInput} is even`
    }else{
        out = `Number ${UserInput} is odd`
    }
    return out
}

isEven(7)
'Number 7 is odd'
isEven(10)
'Number 10 is even'



function add(a,b){
    return a+b
}

add(1)
NaN
add()
NaN
add(1,2,3)
3


//////////Method///////
var add = function(a,b){
    return a+b
}

add(1,2)
3

//////////Es6 Arrow Function///////
const add = (a,b) => { return a+b }

add(1,2)
3

//////////Rest Es6///////
function add(...args){
    console.log(args)
}

add(1,2,3,4)
VM224:2 (4) [1, 2, 3, 4]
add(1)
VM224:2 [1]

function add(...args){
    var out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
   return out
}

add(1,5,7,3)
16
add(1,5)
6

add(1,2)
3
add(1,2,5,3)
11