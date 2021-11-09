var input = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}

add(input)
'1,2,3,4undefinedundefinedundefined'
add(...input)
10

var input = [1,2,3,4]
var city = ["Delhi","Mumbai",...input,"Helsinki","London"]
city
(8) ['Delhi', 'Mumbai', 1, 2, 3, 4, 'Helsinki', 'London']


var input = [1,2,3,4]
function add(...args){
    var out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
   return out
}

add(...input)


function add(a,b){
    return a,b
}
add(1,3)
3
add(3,1)
1
function add(a,b){
    return b,a 
}

add(1,3)
1


function add(a,b){
    var out = [a,b]
    return out
}
add(5,4)
(2) [5, 4]