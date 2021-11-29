[0,1,1,2,3,5,8,13,21]

var fabonicci  = function(n){
    if(n==1){
        return [0,1]
    }else{
        var data = fabonicci(n-1);
        data.push(data[data.length-1]+data[data.length-2])
        return data
    }
}

 [0, 1, 1, 2, 3, 5]